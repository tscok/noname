import { OAuth2Client, TokenPayload } from 'google-auth-library'
import { decode } from 'jsonwebtoken'
import { URL } from 'url'

import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI,
} from '../config'

const authClient = new OAuth2Client(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI
)

export type Token = Pick<TokenPayload, 'email' | 'name' | 'picture'> & {
  uid?: string
}

export const getAuthenticationUrl = () =>
  authClient.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    response_type: 'code',
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ],
  })

export function getAuthenticatedUser(
  requestUrl: string,
  baseUrl: string
): Promise<Token> {
  return new Promise(async (resolve, reject) => {
    try {
      const { searchParams } = new URL(requestUrl, baseUrl)
      const code = searchParams.get('code')
      if (code === null) {
        throw new Error('invalid code query param')
      }
      const { tokens } = await authClient.getToken(code)
      if (typeof tokens.id_token !== 'string') {
        throw new Error('invalid auth tokens')
      }
      authClient.setCredentials(tokens)
      const payload = <TokenPayload>decode(tokens.id_token)
      const token: Token = {
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
        uid: payload.sub,
      }
      resolve(token)
    } catch (e) {
      reject(e)
    }
  })
}
