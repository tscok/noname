import 'dotenv/config'
import fs from 'fs'

function ensureEnv(key: string): string {
  const value = process.env[key]
  if (value === undefined) {
    throw new Error(`Env variable "${key}" not found`)
  }
  return value
}

export const ACCESS_ID = ensureEnv('CINODE_ACCESS_ID')
export const ACCESS_SECRET = ensureEnv('CINODE_ACCESS_SECRET')
export const COMPANY_ID = Number(ensureEnv('CINODE_COMPANY_ID'))

export const GOOGLE_CLIENT_ID = ensureEnv('GOOGLE_OIDC_CLIENT_ID')
export const GOOGLE_CLIENT_SECRET = ensureEnv('GOOGLE_OIDC_CLIENT_SECRET')
export const GOOGLE_REDIRECT_URI = ensureEnv('GOOGLE_OIDC_REDIRECT_URI')

export const SESSION_KEY = 'roses-are-red-cookie-monsters-blue-i<3u'
export const SESSION_MAX_AGE = 1000 * 60 * 60 * 24 // 24 hours

export const FRONTEND_APP = fs.readFileSync(`../public/index.html`, 'utf-8')
export const FRONTEND_URL = 'https://localhost:5173'
export const FRONTEND_ROUTE = {
  LOGOUT: '/logout',
  PROFILE: '/profile',
  ROOT: '/',
}
