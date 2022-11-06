import { useColorMode, IconButton, chakra, useColorModeValue } from '@chakra-ui/react'
import { Moon, Sun } from 'phosphor-react/'

const ChakraMoon = chakra(Moon)
const ChakraSun = chakra(Sun)

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const iconColor = useColorModeValue('purple.500', 'white')

  return (
    <IconButton
      maxW='3rem'
      role='group'
      bg='none'
      _focus={{ bg: 'none' }}
      _hover={{ bg: 'none' }}
      onClick={toggleColorMode}
      aria-label='Toggle Color Mode'
      size='40px'
      icon={
        isDark ? (
          <ChakraMoon
            weight='fill'
            color={iconColor}
            size='1.5rem'
            transition='all ease-out 0.2s'
            _groupHover={{ color: 'yellow.500' }}
          />
        ) : (
          <ChakraSun
            weight='fill'
            color={iconColor}
            size='1.5rem'
            transition='all ease-out 0.2s'
            _groupHover={{ color: 'yellow.500' }}
          />
        )
      }
    />
  )
}
