import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    600: '#0059FF',
    500: '#FD0081'
  },
  neutral: {
    900: '#000',
    800: '#222',
    0: '#fff'
  },
  colorSelector: {
    white: '#fff',
    black: '#000',
    blue: '#0078D7',
    red: '#E81224',
    green: '#16C60C',
    yellow: '#FCE100',
    purple: '#886CE4',
    orange: '#F7630C'
  }
}

const theme = extendTheme({ colors })

const Wrapper = ({ children }) => <ChakraProvider theme={theme}>{children}</ChakraProvider>

export default Wrapper
