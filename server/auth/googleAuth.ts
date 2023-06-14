import 'dotenv/config'
import { OAuth2Client, TokenPayload } from 'google-auth-library'
import { decode } from 'jsonwebtoken'
import { FastifyRequest } from 'fastify'
import { URL } from 'url'

const authClient = new OAuth2Client(
  process.env.GOOGLE_OIDC_CLIENT_ID,
  process.env.GOOGLE_OIDC_CLIENT_SECRET,
  process.env.GOOGLE_OIDC_REDIRECT_URI
)

export const authenticationUrl = authClient.generateAuthUrl({
  access_type: 'offline',
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ],
})

export function getAuthenticatedUser(
  request: FastifyRequest,
  baseUrl: string
): Promise<TokenPayload> {
  return new Promise(async (resolve, reject) => {
    try {
      const { searchParams } = new URL(request.url, baseUrl)
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
      resolve(payload)
    } catch (e) {
      reject(e)
    }
  })
}
