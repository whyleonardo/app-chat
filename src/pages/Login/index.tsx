/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect } from 'react'

import {
  Box,
  VStack,
  Stack,
  Grid,
  Input,
  useColorMode,
  useMediaQuery,
  useColorModeValue,
  FormControl,
  FormLabel,
  Text,
} from '@chakra-ui/react'

import { LoginGoogle } from '@components/Buttons/LoginGoogle/'
import { LoginDiscord } from '@components/Buttons/LoginDiscord/'
import { LoginEmail } from '@components/Buttons/LoginEmail/'
import { useNavigate } from 'react-router-dom'
import { getProfile } from '@utils/getProfile'

interface SessionProps {
  session: {
    user: {
      id: string
      email: string
      avatar_url: string
    }
  }
}

export const Login = ({ session }: SessionProps) => {
  console.log(session)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const borderAltTextColor = useColorModeValue('blackAlpha.400', 'whiteAlpha.400')

  useEffect(() => {
    setLoading(true)

    if (session) {
      getProfile({ session })
      navigate('/dashboard')
      setLoading(false)
    }
  }, [session])

  return (
    <Grid h='calc(100vh - 3.5rem)' templateColumns={isMobileScreen ? 'none' : 'repeat(2, 1fr)'}>
      <Stack display={isMobileScreen ? 'none' : 'flex'}>
        <Box
          bgImage={
            isDark ? "url('src/assets/images/dark.jpg')" : "url('src/assets/images/light.jpg')"
          }
          h='full'
          bgSize='cover'
        />
      </Stack>

      <Stack alignItems='center' justifyContent='center'>
        <VStack px='1rem'>
          <FormControl
            display='flex'
            flexDirection='column'
            minW={[null, null, '25rem']}
            px='2rem'
            py='4rem'
            border='2px'
            borderColor={borderAltTextColor}
            rounded='1rem'
            gap='0.5rem'
            alignItems='center'
          >
            <FormLabel fontWeight='bold'>Email Address</FormLabel>
            <Input
              type='email'
              variant='filled'
              w='15rem'
              onChange={(e) => setEmail(e.target.value)}
            />

            <LoginEmail email={email} />

            <Text fontSize='10px' color={borderAltTextColor} textDecoration='underline'>
              Login only with your email. Simple and Fast.
            </Text>
          </FormControl>

          <Text color={borderAltTextColor}>or</Text>

          <LoginGoogle />
          <LoginDiscord />
        </VStack>
      </Stack>
    </Grid>
  )
}
