import { Button } from '@chakra-ui/react'
import { GoogleLogo } from 'phosphor-react'

export const LoginGoogle = () => {
  return (
    <Button
      bg='red.600'
      aria-label='Login Google'
      rightIcon={<GoogleLogo color='white' weight='fill' size={28} />}
      color='white'
      w='15rem'
    >
      Login With Google
    </Button>
  )
}
