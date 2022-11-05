import { useState, useEffect } from 'react'
import { Spinner } from '@chakra-ui/react'
import { supabase } from '@services/SupabaseClient'
import { Avatar } from '@components/Avatar/'

interface SessionProps {
  session: {
    user: {
      id: string
      email: string
      avatar_url: string
    }
  }
}

export const UserAccount = ({ session }: SessionProps) => {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [website, setWebsite] = useState('')
  const [avatar_url, setAvatarUrl] = useState('')

  const getProfile = async () => {
    if (session) {
      try {
        setLoading(true)
        const { user } = session

        const { data, error, status } = await supabase
          .from('profiles')
          .select('username, website, avatar_url')
          .eq('id', user?.id)
          .single()

        if (error && status !== 406) {
          throw error
        }

        if (data) {
          setUsername(data.username)
          setWebsite(data.website)
          setAvatarUrl(data.avatar_url)
        }
      } catch (error) {
        error
      } finally {
        setLoading(false)
      }
    }
  }

  // @ts-ignore
  const updateProfile = async (e) => {
    e.preventDefault()

    if (session) {
      try {
        setLoading(true)
        const { user } = session

        const updates = {
          id: user.id,
          username,
          website,
          avatar_url,
          updated_at: new Date(),
        }

        const { error } = await supabase.from('profiles').upsert(updates)

        if (error) {
          throw error
        }
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    getProfile()
  }, [session])

  return loading ? (
    <Spinner />
  ) : (
    <div aria-live='polite'>
      {loading ? (
        'Saving ...'
      ) : (
        <form onSubmit={updateProfile} className='form-widget'>
          <div>Email: {session?.user?.email}</div>
          <div>
            <label htmlFor='username'>Name</label>
            <input
              id='username'
              type='text'
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='website'>Website</label>
            <input
              id='website'
              type='url'
              value={website || ''}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div>
            <button className='button primary block' disabled={loading}>
              Update profile
            </button>
          </div>
        </form>
      )}
      <button type='button' className='button block' onClick={() => supabase.auth.signOut()}>
        Sign Out
      </button>

      <Avatar
        url={avatar_url}
        size={150}
        onUpload={(url) => {
          setAvatarUrl(url)
          updateProfile({ username, website, avatar_url: url })
        }}
      />
    </div>
  )
}
