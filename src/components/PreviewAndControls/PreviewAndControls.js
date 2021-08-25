import { Flex, Text, Input, Image, Button, Select, Icon } from '@chakra-ui/react'
import { MdFileDownload, MdCheck } from 'react-icons/md'

import { colorSelectorOptions } from 'utils/helpers'

const PreviewAndControls = ({
  topText,
  setTopText,
  bottomText,
  setBottomText,
  selectedColor,
  setSelectedColor,
  generatedMeme,
  isLoading,
  handleGenerateMeme,
  image,
  imageContainer
}) => (
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
    <Flex direction='column' align='flex-start' justify='flex-start' h='650px' pt='16px' ml='48px'>
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
        {colorSelectorOptions.map(color => (
          <option key={color.name} value={color.name}>
            {color.icon}
          </option>
        ))}
      </Select>
      <Button
        w='100%'
        bgColor='brand.600'
        color='white'
        transition='all 0.2s ease-in-out'
        _hover={{ bgGradient: 'linear(to-l, #0059FF,#FF0080)' }}
        mr='8px'
        onClick={() => !isLoading && handleGenerateMeme()}
        disabled={isLoading}
        mb='4px'
      >
        generate your meme
      </Button>
      {generatedMeme && (
        <Flex align='center' mb='12px' mx='auto'>
          <Icon color='colorSelector.green' align='center' w='20px'>
            <MdCheck size='26px' />
          </Icon>
          <Text color='colorSelector.green' fontWeight={600}>
            meme generated
          </Text>
        </Flex>
      )}
      <Button
        as='a'
        w='100%'
        bgColor='brand.600'
        color='white'
        transition='all 0.2s ease-in-out'
        _hover={generatedMeme && { bgGradient: 'linear(to-l, #0059FF,#FF0080)' }}
        _active={!generatedMeme && { bgColor: 'brand.600' }}
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
)

export default PreviewAndControls
