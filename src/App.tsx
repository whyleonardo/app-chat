import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '@pages/Login'
import { Dashboard } from '@pages/Dashboard'
import { Layout } from '@layout/Layout'
import { UserAccount } from '@pages/UserAccount'

import { supabase } from '@services/SupabaseClient'

interface SessionProps {
  user: {
    id: string
    email: string
  }
}

export const App = () => {
  // @ts-ignore
  const [session, setSession] = useState<SessionProps>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      // @ts-ignore
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      // @ts-ignore
      setSession(session)
    })
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<UserAccount session={session} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
