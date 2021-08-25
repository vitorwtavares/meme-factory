import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  },
  neutral: {
    900: '#000',
    800: '#222',
    0: '#fff'
  }
}

const theme = extendTheme({ colors })

const Wrapper = ({ children }) => <ChakraProvider theme={theme}>{children}</ChakraProvider>

export default Wrapper
