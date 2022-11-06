import { Button } from '@chakra-ui/react'
import { DiscordLogo } from 'phosphor-react'

export const LoginDiscord = () => {
  return (
    <Button
      bg='purple.500'
      aria-label='Login Google'
      rightIcon={<DiscordLogo color='white' weight='fill' size={28} />}
      color='white'
      w='15rem'
    >
      Login With Discord
    </Button>
  )
}
