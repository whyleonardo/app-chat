import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  disableTransitionOnChange: false,
}

const semanticTokens = {
  colors: {
    text: {
      default: 'purple.500',
      _dark: 'white',
    },
  },
}

const styles = {
  global: (props: Record<string, any>) => ({
    body: {
      fontFamily: 'Roboto',
      // color: mode('purple.500', 'white')(props),
      bg: mode('white', 'blackAlpha.200')(props),
      lineHeight: 'base',
    },
  }),
}

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

export const theme = extendTheme({ config, colors, semanticTokens, styles })
