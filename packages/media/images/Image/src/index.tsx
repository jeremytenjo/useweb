import React, { useState } from 'react'

import { ImageWrapper, InnerImage } from './styles'

type Types = {
  src: string
  alt: string
  base64?: string
  onClick?: () => void
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  definitions?: object
  styles?: object
  loading?: 'eager' | 'lazy'
}

/**
 * definitions: In case  the src key in not called src in props, expects `{src: <propsrcname>}`
 */
export default function Image({
  src,
  base64,
  alt = '',
  onClick = () => null,
  objectFit = 'cover',
  definitions,
  styles: customStyles = {},
  loading = 'eager',
  ...props
}: Types) {
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
    <ImageWrapper onClick={onClick} styles={customStyles} data-image-wrapper>
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
