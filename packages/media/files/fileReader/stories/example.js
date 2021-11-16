import Box from '@useweb/box'
import Image from '../../../images/Image'
import fileReader from '..'

const ColorExtractorExample = () => {
  const inputRef = useRef(null)
  const [img, setImg] = useState('')

  const handleInput = async () => {
    const {
      current: { files },
    } = inputRef
    const file = files[0]
    const fileBase64 = await fileReader({ file })

    setImg(fileBase64)
  }

  return (
    <Box styles={{ width: 'fit-content', gridGap: 'm' }}>
      <input ref={inputRef} type='file' onChange={handleInput} />

      <Image src={img} />
    </Box>
  )
}

export default memo(ColorExtractorExample)
