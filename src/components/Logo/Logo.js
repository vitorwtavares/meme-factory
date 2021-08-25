import { Text } from '@chakra-ui/react'

const Logo = ({ ...props }) => (
  <Text
    bgGradient='linear(to-l, #0059FF,#FF0080)'
    bgClip='text'
    fontSize='6xl'
    fontWeight='extrabold'
    transition='all 0.4s ease-in-out'
    textAlign='center'
    mb='16px'
    {...props}
  >
    meme generator
  </Text>
)

export default Logo
