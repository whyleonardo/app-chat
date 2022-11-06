import { Stack, Flex, chakra, useColorModeValue } from '@chakra-ui/react'
import { ColorModeSwitch } from '@components/ColorModeSwitch/'
import { Chats, ArrowLeft } from 'phosphor-react'
import { useNavigate, useLocation } from 'react-router-dom'

const ChakraChats = chakra(Chats)
const ChakraArrowBack = chakra(ArrowLeft)

export const Header = () => {
  const iconColor = useColorModeValue('purple.500', 'whiteAlpha.900')

  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <Stack
      as={'header'}
      position='sticky'
      top='0px'
      zIndex='3'
      boxShadow='sm'
      w='full'
      px='2rem'
      h='3.5rem'
      alignItems='center'
      justifyContent='center'
    >
      <Flex w='full' h='3.5rem' maxW='1120px' alignItems='center' justifyContent='space-between'>
        {pathname == '/' ? (
          <ChakraChats
            size={40}
            color={iconColor}
            weight='duotone'
            transform='auto'
            _hover={{ scale: 1.25 }}
            cursor='pointer'
            transition='ease-in-out 0.4s'
          />
        ) : (
          <ChakraArrowBack
            size={40}
            color={iconColor}
            weight='duotone'
            transform='auto'
            _hover={{ scale: 1.25 }}
            cursor='pointer'
            transition='ease-in-out 0.4s'
            onClick={() => navigate('/')}
          />
        )}
        <ColorModeSwitch />
      </Flex>
    </Stack>
  )
}
