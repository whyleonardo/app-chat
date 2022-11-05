/* eslint-disable @typescript-eslint/no-unused-vars */
//     <div className="row flex-center flex">
//       <div className="col-6 form-widget" aria-live="polite">
//         <h1 className="header">Supabase + React</h1>
//         <p className="description">Sign in via magic link with your email below</p>
//         {loading ? (
//           'Sending magic link...'
//         ) : (
//           <form onSubmit={handleLogin}>
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               className="inputField"
//               type="email"
//               placeholder="Your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <button className="button block" aria-live="polite">
//               Send magic link
//             </button>
//           </form>
//         )}
//       </div>
//     </div>

import { useState } from 'react'
import { loginMagicLink } from '@utils/Login/MagicLink'

import { Box, useToast, Stack, Grid, Heading, Text, Input, Button } from '@chakra-ui/react'

export const Login = () => {
  // const [loading, setLoading] = useState(false)
  // const [email, setEmail] = useState('')

  // const toast = useToast()

  // const handleLogin = async (e) => {
  //   loginMagicLink()
  // }

  return (
    <Grid h='calc(100vh - 3.5rem)' templateColumns='repeat(2, 1fr)'>
      <Stack border='1px'></Stack>
      <Stack border='1px' borderColor='blue' bg='whiteAlpha'></Stack>
    </Grid>
  )
}
