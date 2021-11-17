import React, { Fragment, useEffect, useRef } from 'react'
import SwipeableViews from 'react-swipeable-views'
import Box from '@useweb/box'
import useKeyPress from '@useweb/use-key-press'

import IconArrow from './IconArrow'

import { defaultProps, propTypes } from './props'
import * as styles from './styles'

export default function Carousel({
  children,
  wrapperStyles,
  infinite,
  index,
  setIndex,
  iconColor,
}) {
  const selectedIndexRef = useRef(index)
  children = Array.isArray(children) ? children : [children]
  const childrenLength = children.length
  const hasOneItem = childrenLength === 1
  const showLeftArrow = infinite || index !== 0
  const showRightArrow = infinite || index !== childrenLength - 1

  useEffect(() => {
    selectedIndexRef.current = index
  }, [index])

  const handleBack = () => {
    let prevItem = selectedIndexRef.current - 1
    const prevItemIsLowerThanTotal = prevItem === -1
    prevItem = prevItemIsLowerThanTotal ? childrenLength - 1 : prevItem
    selectedIndexRef.current = prevItem
    setIndex(prevItem)
  }

  const handleNext = () => {
    let nextItem = selectedIndexRef.current + 1
    const nextItemIsHigherThanTotal = nextItem > childrenLength - 1
    nextItem = nextItemIsHigherThanTotal ? 0 : nextItem
    selectedIndexRef.current = nextItem
    setIndex(nextItem)
  }

  const handleItemChange = (nextIndex) => {
    setIndex(nextIndex)
  }

  useKeyPress('ArrowLeft', handleBack)
  useKeyPress('ArrowRight', handleNext)

  return (
    <Box name='carousel' styles={{ ...styles.wrapper, ...wrapperStyles }}>
      <SwipeableViews index={index} onChangeIndex={handleItemChange}>
        {children.map((child, index) => {
          return <Fragment key={index + Math.random()}>{child}</Fragment>
        })}
      </SwipeableViews>

      {showLeftArrow && !hasOneItem && (
        <IconArrow onClick={handleBack} color={iconColor} style={styles.leftArrow} />
      )}

      {showRightArrow && !hasOneItem && (
        <IconArrow onClick={handleNext} style={styles.rightArrow} color={iconColor} />
      )}
    </Box>
  )
}

Carousel.defaultProps = defaultProps
Carousel.propTypes = propTypes
