import { useState } from 'react'
import { Button, useToast, Spinner } from '@chakra-ui/react'
import { EnvelopeSimple } from 'phosphor-react'

import { supabase } from '@services/SupabaseClient'

interface LoginEmailProps {
  email: string
}

export const LoginEmail = ({ email }: LoginEmailProps) => {
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const handleLoginMagicLink: (email: string) => Promise<void> = async (email: string) => {
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: '/dashboard',
        },
      })
      if (error) throw error
      toast({
        title: 'Sucesss',
        description: 'Check your email for the login link!',
        status: 'success',
        duration: 2000,
        position: 'top',
      })
    } catch (error) {
      toast({
        title: 'Error',
        // @ts-ignore
        description: error,
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      aria-label='Login Google'
      rightIcon={<EnvelopeSimple color='white' weight='regular' size={28} />}
      color='white'
      onClick={() => handleLoginMagicLink(email)}
      w='15rem'
    >
      {loading ? <Spinner /> : 'Login with Email'}
    </Button>
  )
}
