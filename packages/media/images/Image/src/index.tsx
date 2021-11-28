import React, { useState, memo } from 'react'

import { defaultProps, propTypes } from './props'
import { ImageWrapper, InnerImage } from './styles'

type Types = {
  src: string
  alt: string
  base64?: string
  onClick?: (props: any) => void
  objectFit?: string
  definitions?: object
  styles?: object
  loading?: boolean
}

const Image = ({
  src,
  base64,
  alt,
  onClick = () => null,
  objectFit,
  definitions,
  styles: customStyles,
  loading,
  ...props
}: Types) => {
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
