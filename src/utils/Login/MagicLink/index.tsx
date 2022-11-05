import { supabase } from '@services/SupabaseClient'

export const loginMagicLink = async (email: string) => {
  // e.preventDefault()

  try {
    // setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) throw error
    alert('Check your email for the login link!')
  } catch (error) {
    // toast(error)
  } finally {
    // setLoading(false)
  }
}
