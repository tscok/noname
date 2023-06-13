import fs from 'fs'
import { join } from 'path'

export const HTTPS_CERT = fs.readFileSync(join(__dirname, '../cert/cert.pem'), {
  encoding: 'utf-8',
})
export const HTTPS_KEY = fs.readFileSync(join(__dirname, '../cert/key.pem'), {
  encoding: 'utf-8',
})
