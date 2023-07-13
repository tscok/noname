import { ApiConfig, RequestParams } from './__generated__/http-client'
import { V01 as Api } from './__generated__/V01'

type AuthToken = {
  access_token: string
  refresh_token: string
}

type TokenStore = {
  token: AuthToken
  validTo: number
}

class Cinode {
  static account: string
  static tokenStore?: TokenStore
  static ttl: number

  constructor(accessId: string, accessSecret: string) {
    Cinode.account = `${accessId}:${accessSecret}`
    Cinode.ttl = 110 * 1000 // 1 min 50 sec
  }

  static async fetchToken(): Promise<AuthToken> {
    try {
      const authStr = Buffer.from(Cinode.account).toString('base64')
      const response = await fetch('https://api.cinode.com/token', {
        headers: {
          Authorization: `Basic ${authStr}`,
        },
      })
      return response.json()
    } catch (error: any) {
      throw new Error(error)
    }
  }

  static async getToken(): Promise<AuthToken> {
    if (!Cinode.tokenStore || Cinode.tokenStore.validTo <= Date.now()) {
      Cinode.tokenStore = {
        token: await Cinode.fetchToken(),
        validTo: Date.now() + Cinode.ttl,
      }
    }
    return Cinode.tokenStore.token
  }

  static async securityWorker(): Promise<RequestParams> {
    const token = await Cinode.getToken()
    if (!token) {
      throw new Error('Unable to fetch token')
    }
    return {
      headers: { Authorization: `Bearer ${token.access_token}` },
    }
  }

  get apiConfig(): ApiConfig {
    return {
      baseUrl: 'https://api.cinode.com',
      securityWorker: Cinode.securityWorker,
    }
  }
}

export default class CinodeApi extends Api {
  constructor(accessId: string, accessSecret: string) {
    const cinode = new Cinode(accessId, accessSecret)
    super(cinode.apiConfig)
  }
}
