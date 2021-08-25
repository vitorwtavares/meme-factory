import { Flex } from '@chakra-ui/react'

const Container = ({ children, ...props }) => (
  <Flex align='center' justify='start' minH='100vh' direction='column' {...props}>
    {children}
  </Flex>
)

export default Container
