import React, { forwardRef } from 'react'
// https://github.com/karl-run/react-bottom-scroll-listener
import { BottomScrollListener } from 'react-bottom-scroll-listener'

import { Wrapper } from './styles'

const List = (
  {
    photoGrid,
    data = [],
    children,
    direction = 'column',
    onItemClick = () => null,
    ItemComponent,
    listItemDefinitions,
    repeat = 3,
    autoColumns,
    overflows,
    minWidth = 600,
    repeatOnMinWidth = 3,
    onScrollEnd,
    rawChildren,
    gap = 'xs',
    padding = 'xs',
    styles = {},
    ...rest
  },
  ref,
) => {
  const dataLength = data.length
  children = Array.isArray(children) ? children : [children]

  const loadWithItemComponent = () =>
    data.map((item, index) => (
      <li key={item._id || item.id || index}>
        <ItemComponent
          item={item}
          index={index}
          onClick={() => onItemClick({ item, index })}
          id={item._id || item.id || index}
          definitions={listItemDefinitions}
          {...item}
        />
      </li>
    ))

  const Main = (scrollRef) => (
    <Wrapper
      ref={scrollRef}
      direction={direction}
      dataLength={dataLength}
      repeat={repeat}
      autoColumns={autoColumns}
      overflows={overflows}
      minWidth={minWidth}
      repeatOnMinWidth={repeatOnMinWidth}
      photoGrid={photoGrid}
      gap={gap}
      padding={padding}
      styles={styles}
      {...rest}
    >
      {rawChildren
        ? children
        : children &&
          children[0] &&
          children.map((child, index) => <li key={children.length + index}>{child}</li>)}
      {ItemComponent && loadWithItemComponent()}
      {overflows && <li className='min' />}
    </Wrapper>
  )

  return onScrollEnd ? (
    <BottomScrollListener onBottom={onScrollEnd}>{Main}</BottomScrollListener>
  ) : (
    Main(ref)
  )
}

export default forwardRef(List)
