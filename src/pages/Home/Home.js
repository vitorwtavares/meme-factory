import { useState, useRef } from 'react'

import html2canvas from 'html2canvas'

import { Logo, Container, UploadButton, PreviewAndControls } from 'components'

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
    if (image) {
      setHasSelectedFile(true)
      setGeneratedMeme(null)
      const reader = new FileReader()
      reader.onloadend = () => setImage(reader.result)
      reader?.readAsDataURL(image)
    }
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
    <Container pb='36px'>
      <Logo mt={hasSelectedFile ? 0 : '40vh'} />
      <UploadButton
        inputRef={inputRef}
        handleChangeImage={handleChangeImage}
        hasSelectedFile={hasSelectedFile}
      />
      {image && (
        <PreviewAndControls
          topText={topText}
          setTopText={setTopText}
          bottomText={bottomText}
          setBottomText={setBottomText}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          generatedMeme={generatedMeme}
          isLoading={isLoading}
          handleGenerateMeme={handleGenerateMeme}
          image={image}
          imageContainer={imageContainer}
        />
      )}
    </Container>
  )
}

export default Home
