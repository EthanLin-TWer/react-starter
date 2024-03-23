import { useHomeReducer } from '../../hooks/redux/useHomeReducer'
import { onMount } from '../../hooks/onMount'
import { useSearchHotels } from '../../hooks/api/useHotels'
import { Typography } from '@mui/material'

export const HomeComponent = () => {
  const { setLoaded } = useHomeReducer()
  const { hotels, isLoading } = useSearchHotels({
    city: 'SZ',
  })

  onMount(() => {
    setLoaded()
  })

  return (
    <>
      <Typography variant="h5">Welcome to the home page</Typography>

      <Typography variant="body1">
        {isLoading ? 'Hang on, we are loading data for you ... ' : `${hotels.data.length} hotels has been loaded! `}
      </Typography>
    </>
  )
}
