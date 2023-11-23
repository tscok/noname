export default class Client {
  async makeRequest(path: string, method: 'GET' | 'POST', body?: unknown) {
    try {
      const response = await fetch(
        new Request(path, { method, body: JSON.stringify(body) })
      )
      const data = await response.json()
      return data
    } catch (e) {
      throw new Error(`${method} request to ${path} failed`)
    }
  }

  get(path: string) {
    return this.makeRequest(path, 'GET')
  }

  post(path: string, body?: unknown) {
    return this.makeRequest(path, 'POST', body)
  }
}
