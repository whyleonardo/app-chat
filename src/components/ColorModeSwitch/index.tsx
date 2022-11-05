import { useColorMode, Button } from '@chakra-ui/react'

export const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Button maxW='3rem' alignSelf='end' onClick={toggleColorMode}>
      Change Theme
    </Button>
  )
}
