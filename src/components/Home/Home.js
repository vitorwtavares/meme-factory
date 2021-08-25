import { useState, useRef } from 'react'
import { Flex, Text, Input, Image, Button, Select, IconButton } from '@chakra-ui/react'
import { MdFileDownload } from 'react-icons/md'
import html2canvas from 'html2canvas'

const Home = () => {
  const [hasSelectedFile, setHasSelectedFile] = useState(false)
  const [image, setImage] = useState(null)
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [selectedColor, setSelectedColor] = useState('colorSelector.white')
  const [generatedMeme, setGeneratedMeme] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const inputRef = useRef(null)
  const imageContainer = useRef(null)

  const handleChangeImage = image => {
    setHasSelectedFile(true)
    const reader = new FileReader()
    reader.onloadend = () => setImage(reader.result)
    reader.readAsDataURL(image)
  }

  const handleGenerateMeme = async () => {
    try {
      setIsLoading(true)
      const canvas = await html2canvas(imageContainer.current)
      setGeneratedMeme(canvas.toDataURL())
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Flex align='center' justify='start' minH='100vh' direction='column' pb='36px'>
      <Text
        bgGradient='linear(to-l, #7928CA,#FF0080)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
        mt={hasSelectedFile ? 0 : '40vh'}
        transition='all 0.4s ease-in-out'
        textAlign='center'
        mb='16px'
      >
        meme generator
      </Text>

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

      <Button
        bgColor='brand.600'
        color='white'
        transition='all 0.2s ease-in-out'
        _hover={{ bgGradient: 'linear(to-l, #7928CA,#FF0080)' }}
        mr='8px'
        onClick={() => inputRef.current.click()}
      >
        {hasSelectedFile ? 'try with a different image' : 'upload an image to get started'}
      </Button>
      {image && (
        <Flex align='center' justify='center' mt='16px'>
          <Flex direction='column'>
            <Text mb='8px' fontWeight={600}>
              preview:
            </Text>
            <Flex position='relative' ref={imageContainer}>
              <Image
                src={image}
                w='650px'
                h='650px'
                objectFit='contain'
                zIndex='1'
                bgColor='neutral.900'
                userSelect='none'
                draggable='false'
              />
              {topText && (
                <Text
                  position='absolute'
                  zIndex='2'
                  top={0}
                  fontSize='6xl'
                  fontWeight={700}
                  textAlign='center'
                  color={selectedColor}
                  w='650px'
                  maxH='200px'
                  overflow='hidden'
                  pb='18px'
                >
                  {topText}
                </Text>
              )}
              {bottomText && (
                <Text
                  position='absolute'
                  zIndex='2'
                  bottom={10}
                  fontSize='6xl'
                  fontWeight={700}
                  textAlign='center'
                  color={selectedColor}
                  w='650px'
                  maxH='200px'
                  overflow='hidden'
                  pb='4px'
                >
                  {bottomText}
                </Text>
              )}
            </Flex>
          </Flex>
          <Flex
            direction='column'
            align='flex-start'
            justify='flex-start'
            h='650px'
            pt='16px'
            ml='48px'
          >
            <Text fontWeight={600} mr='12px' mb='8px'>
              top text
            </Text>
            <Input
              placeholder='top text'
              w='300px'
              mb='12px'
              onChange={e => setTopText(e.target.value)}
              value={topText}
            />
            <Text fontWeight={600} mr='12px' mb='8px'>
              bottom text
            </Text>
            <Input
              placeholder='bottom text'
              w='300px'
              mb='12px'
              onChange={e => setBottomText(e.target.value)}
              value={bottomText}
            />
            <Text fontWeight={600} mr='12px' mb='8px'>
              font color
            </Text>
            <Select
              onChange={e => setSelectedColor(`colorSelector.${e.target.value}`)}
              w='70px'
              mb='64px'
            >
              <option value='white'>🤍</option>
              <option value='black'>🖤</option>
              <option value='blue'>💙</option>
              <option value='red'>❤️</option>
              <option value='green'>💚</option>
              <option value='yellow'>💛</option>
              <option value='purple'>💜</option>
              <option value='orange'>🧡</option>
            </Select>
            <Button
              w='100%'
              bgColor='brand.600'
              color='white'
              transition='all 0.2s ease-in-out'
              _hover={{ bgGradient: 'linear(to-l, #7928CA,#FF0080)' }}
              mr='8px'
              onClick={() => !isLoading && handleGenerateMeme()}
              disabled={isLoading}
              mb='12px'
            >
              generate your meme
            </Button>
            <Button
              as='a'
              w='100%'
              bgColor='brand.600'
              color='white'
              transition='all 0.2s ease-in-out'
              _hover={{ bgGradient: 'linear(to-l, #7928CA,#FF0080)' }}
              mr='8px'
              href={generatedMeme}
              rightIcon={<MdFileDownload />}
              download
              disabled={isLoading || !generatedMeme}
            >
              download your meme
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}

export default Home
