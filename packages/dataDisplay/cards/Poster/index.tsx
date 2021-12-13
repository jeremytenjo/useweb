import { lazy, useEffect, useRef, Suspense } from 'react'
import Image from '../../../media/images/Image/src'

import { defaultProps, propTypes } from './props'
import { Wrapper, InfoContainer, TypographyWrapper, Label } from './styles'

const Text = lazy(() => import(/* webpackChunkName: 'Text' */ '../../Text/src/index'))
const Animation = lazy(
  () =>
    import(/* webpackChunkName: 'Animation' */ '../../../utils/Animation/Animate/src'),
)

const Poster = ({
  label,
  src,
  onClick,
  alt,
  loading,
  backgroundColor,
  size,
  noAnimation,
  lastAiredEpisode,
  ...rest
}) => {
  const wrapperRef = useRef(null)
  const typographyWrapperRef = useRef(null)
  const sizeIsAuto = size === 'auto'
  const height = size
  const width = sizeIsAuto ? '100%' : height / 1.5
  const heightString = `${height}px`
  const widthString = sizeIsAuto ? width : `${width}px`

  useEffect(() => {
    if (sizeIsAuto) {
      setHeight()
      window.addEventListener('resize', setHeight, true)
      return () => window.removeEventListener('resize', setHeight)
    }
  })

  const setHeight = () => {
    if (wrapperRef.current) {
      const img = wrapperRef.current.querySelector('img')
      const imgWrapper = wrapperRef.current.querySelector('div[data-image-wrapper]')
      const typographyWrapper = typographyWrapperRef.current
      const posterWidth = parseInt(wrapperRef.current.offsetWidth, 10)
      if (!posterWidth) return null
      const height = `${posterWidth * 1.5}px`

      wrapperRef.current.style.height = height
      img && (img.style.height = height)
      imgWrapper && (imgWrapper.style.height = height)
      typographyWrapper &&
        (typographyWrapper.style.height = `${parseInt(height, 10) - 30}px`)
    }
  }

  const handleClick = () => onClick(rest)

  return (
    <Wrapper
      onClick={handleClick}
      style={{
        width: widthString,
        height: heightString,
      }}
      src={src}
      backgroundColor={backgroundColor}
      ref={wrapperRef}
      isLoading={loading}
      noAnimation={noAnimation}
    >
      {src && (
        <Image
          src={src}
          styles={{
            width: widthString,
            height: sizeIsAuto ? undefined : heightString,
          }}
          alt={alt}
        />
      )}
      {!src && (
        <Suspense fallback={null}>
          <TypographyWrapper ref={typographyWrapperRef}>
            <Text
              text={alt}
              styles={{
                color: 'white',
                textAlign: 'center',
                cursor: 'default',
              }}
              variant='caption'
            />
          </TypographyWrapper>
        </Suspense>
      )}

      {loading && (
        <Suspense fallback={null}>
          <Animation name='blinking' show el={wrapperRef} />
        </Suspense>
      )}

      {lastAiredEpisode && (
        <InfoContainer>
          <span>s{lastAiredEpisode.season}</span> <span>e{lastAiredEpisode.episode}</span>
        </InfoContainer>
      )}

      {label && (
        <InfoContainer>
          <Label>{label}</Label>
        </InfoContainer>
      )}
    </Wrapper>
  )
}

Poster.defaultProps = defaultProps
Poster.propTypes = propTypes

export default Poster
