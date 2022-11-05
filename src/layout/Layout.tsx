import { ReactElement } from 'react'
import { Stack } from '@chakra-ui/react'
import { Header } from '@layout/Header'

interface LayoutProps {
  children: ReactElement
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />

      <Stack as={'main'} h='calc(100vh - 3.5rem)'>
        {children}
      </Stack>
    </>
  )
}
