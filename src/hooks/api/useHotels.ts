import { useQuery } from '@tanstack/react-query'

import { getHotels } from '../../api-client/hotels/hotels'
import { SearchCriteria } from '../../api-client/hotels/request.types'
import { HotelResponse } from '../../api-client/hotels/response.types'

export const useSearchHotels = (criteria: SearchCriteria) => {
  const { data = [], isLoading } = useQuery<HotelResponse>({
    queryKey: ['hotels'],
    queryFn: () => getHotels(criteria),
  })

  return { hotels: data, isLoading }
}
