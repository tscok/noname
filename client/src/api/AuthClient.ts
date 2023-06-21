import { Token } from '../../../server/auth/googleAuth'

import Client from './Client.ts'

export default class AuthClient extends Client {
  constructor() {
    super()
  }

  login() {
    return '/auth/login'
  }

  logout() {
    return '/auth/logout'
  }

  async getCurrentUser(): Promise<Token> {
    return this.get('/auth/me')
  }
}
