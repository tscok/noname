export default class Client {
  async get(path: string) {
    const response = await fetch(path)
    const data = await response.json()
    return data
  }
}
