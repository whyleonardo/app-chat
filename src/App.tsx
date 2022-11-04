import { Stack } from '@chakra-ui/react'
import { ColorModeSwitch } from '@components/ColorModeSwitch'


export const App = () => {
  return (
    <Stack h='100vh' justifyContent='center' alignItems='center'>
      <ColorModeSwitch />
    </Stack>
  )
}

