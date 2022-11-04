import { useColorMode, Button } from '@chakra-ui/react'

export const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Button onClick={toggleColorMode}>
      Change Theme
    </Button>
  )
}

