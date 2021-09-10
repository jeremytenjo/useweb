import { defaultProps, propTypes } from './props'
import { ImageWrapper, InnerImage } from './styles'

const Image = ({
  src,
  base64,
  alt,
  onClick,
  objectFit,
  definitions,
  styles: customStyles,
  loading,
  ...props
}) => {
  const [srcLoaded, setSrcLoaded] = useState(!base64)

  // In case  the src key in not called src in props, expects {src: <propsrcname>}
  if (definitions) {
    for (const key in definitions) {
      key === 'src' && (src = props[definitions[key]])
    }
  }

  const handleImageLoad = () => setSrcLoaded(true)

  const showBase = base64 && !srcLoaded
  const srcDisplay = !base64 || srcLoaded ? 'block' : 'none'
  const onLoadFunction = showBase ? { onLoad: handleImageLoad } : {}

  return (
    <ImageWrapper onClick={() => onClick(props)} styles={customStyles} data-image-wrapper>
      {showBase && (
        <InnerImage
          data-base64
          src={base64}
          style={{ objectFit }}
          alt={alt}
          loading={loading}
        />
      )}
      <InnerImage
        alt={alt}
        src={src}
        style={{ objectFit, display: srcDisplay }}
        loading={loading}
        {...onLoadFunction}
      />
    </ImageWrapper>
  )
}

Image.defaultProps = defaultProps
Image.propTypes = propTypes

export default memo(Image)
