import { Token } from '../../../server/auth/googleAuth'

import Client from './Client.ts'

class AuthClient extends Client {
  constructor() {
    super()
  }

  login(): void {
    window.location.href = '/auth/login'
  }

  logout(): void {
    window.location.href = '/auth/logout'
  }

  async getCurrentUser(): Promise<Token | null> {
    return this.get('/auth/me')
  }
}

export default new AuthClient()
