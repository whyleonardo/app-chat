import React from 'react'
import { Button } from '@chakra-ui/react'
import { supabase } from '@services/SupabaseClient'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const navigate = useNavigate()
  async function signOut() {
    const { error } = await supabase.auth.signOut()
    navigate('/')
  }
  return <Button onClick={signOut}>Sair</Button>
}
