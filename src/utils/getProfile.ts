import { supabase } from '@services/SupabaseClient'

interface SessionProps {
  session: {
    user: {
      id: string
      email: string
      avatar_url: string
    }
  }
}

export const getProfile = async ({ session }: SessionProps) => {
  try {
    // setLoading(true)
    const { user } = session

    const { data, error, status } = await supabase
      .from('profiles')
      .select('username, website, avatar_url')
      .eq('id', user.id)
      .single()

    // if (error && status !== 406) {
    //   throw error
    // }

    // if (data) {
    //   setUsername(data.username)
    //   setWebsite(data.website)
    //   setAvatarUrl(data.avatar_url)
    // }
  } catch (error) {
    alert(error)
  } finally {
    // setLoading(false)
  }
}
