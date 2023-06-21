import client from '../api/AuthClient'

interface Auth {
  login: () => void
  logout: () => void
}

export const auth: Auth = {
  login() {
    window.location.href = client.login()
  },
  logout() {
    window.location.href = client.logout()
  },
}
