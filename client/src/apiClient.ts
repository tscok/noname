import { Token } from '../../server/auth/googleAuth'

class Client {
  async get(path: string) {
    const response = await fetch(path)
    const data = await response.json()
    return data
  }
}

export class ApiClient extends Client {
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
