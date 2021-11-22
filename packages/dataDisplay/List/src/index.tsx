import React from 'react'
// https://github.com/karl-run/react-bottom-scroll-listener
import { BottomScrollListener } from 'react-bottom-scroll-listener'

import { Wrapper } from './styles'

type Props = {
  photoGrid?: string
  data?: any
  children?: any
  direction?: string
  ItemComponent?: string
  listItemDefinitions?: string
  repeat?: number
  autoColumns?: boolean
  overflows?: boolean
  minWidth?: number
  repeatOnMinWidth?: number
  rawChildren?: string
  gap?: string
  padding?: string
  styles?: object
  onItemClick?: (data: any) => void
  onScrollEnd?: () => void
}

const List = ({
  photoGrid,
  data = [],
  children,
  direction = 'column',
  onItemClick,
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
}: Props) => {
  const dataLength = data.length
  children = Array.isArray(children) ? children : [children]

  const loadWithItemComponent = () =>
    data.map((item, index) => (
      <li key={item._id || item.id || index}>
        <ItemComponent
          item={item}
          index={index}
          onClick={() => onItemClick && onItemClick({ item, index })}
          id={item._id || item.id || index}
          definitions={listItemDefinitions}
          {...item}
        />
      </li>
    ))

  const Main = () => (
    <Wrapper
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
    <Main />
  )
}

export default List
