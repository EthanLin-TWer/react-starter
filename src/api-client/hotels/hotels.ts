import ApiClient from '../index'

import { SearchCriteria } from './request.types'
import { HotelResponse } from './response.types'

const apiClient = new ApiClient()
export const getHotels = (hotelSearchCriteria: SearchCriteria): Promise<HotelResponse> =>
  apiClient.get('/hotels', hotelSearchCriteria)
