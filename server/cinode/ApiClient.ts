import { ACCESS_ID, ACCESS_SECRET, COMPANY_ID } from '../config'
import CinodeApi from './CinodeApi'

const api = new CinodeApi(ACCESS_ID, ACCESS_SECRET)

class ApiClient {
  getUsers() {
    return api.companyUsers(COMPANY_ID, { secure: true })
  }

  getUser(userId: number) {
    return api.user(COMPANY_ID, userId, { secure: true })
  }

  getAvailability(startDate: string, endDate: string) {
    return api.searchAvailability(
      COMPANY_ID,
      { startDate, endDate },
      { secure: true }
    )
  }
}

export const apiClient = new ApiClient()
