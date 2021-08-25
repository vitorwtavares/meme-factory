import { Input, Button, Text, Tooltip } from '@chakra-ui/react'

const UploadButton = ({ inputRef, handleChangeImage, hasSelectedFile }) => (
  <>
    <Input
      type='file'
      w='1px'
      h='1px'
      pt='4px'
      onChange={e => handleChangeImage(e.target.files[0])}
      variant='filled'
      ref={inputRef}
      visibility='hidden'
    />
    <Tooltip
      label='Recommended: square images, 650px per side or larger'
      hasArrow
      fontWeight={500}
      bgColor='neutral.800'
    >
      <Button
        bgColor='brand.600'
        color='white'
        transition='all 0.2s ease-in-out'
        _hover={{ bgGradient: 'linear(to-l, #0059FF,#FF0080)' }}
        mr='8px'
        onClick={() => inputRef.current.click()}
      >
        {hasSelectedFile ? 'try with a different image' : 'upload an image to get started'}
      </Button>
    </Tooltip>
  </>
)

export default UploadButton
