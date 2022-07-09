import React, { Fragment } from 'react'
import Box, { type BoxProps } from '@mui/material/Box'

export type ListProps = {
  data: any[]
  ListItemComponent: any
  listItemProps?: any
  sx?: BoxProps['sx']
  onItemClick?: (data: { data: any }) => any
  AdjacentItem?: any
}

export default function List({
  data = [],
  ListItemComponent,
  listItemProps = {},
  sx = {},
  onItemClick = () => null,
  AdjacentItem,
}: ListProps) {
  return (
    <Wrapper sx={sx as any} data-id='List'>
      <Items
        data={data}
        ListItemComponent={ListItemComponent}
        listItemProps={listItemProps}
        onItemClick={onItemClick}
        AdjacentItem={AdjacentItem}
      />
    </Wrapper>
  )
}

const Wrapper = ({ children, sx = {} as ListProps['sx'] }) => {
  return (
    <Box
      component='ul'
      sx={{ display: 'grid', margin: '0', padding: '0', listStyle: 'none', ...sx }}
    >
      {children}
    </Box>
  )
}

const Items = ({
  data,
  ListItemComponent,
  listItemProps = {},
  onItemClick,
  AdjacentItem,
}) => {
  return data.map((item, index) => {
    const key = String(item?.id) + Math.random() + index

    return (
      <Fragment key={key}>
        <Li
          Child={ListItemComponent}
          onItemClick={onItemClick}
          index={index}
          item={item}
          listItemProps={listItemProps}
        />

        {AdjacentItem && (
          <Li
            Child={AdjacentItem}
            onItemClick={onItemClick}
            index={index}
            item={item}
            listItemProps={listItemProps}
          />
        )}
      </Fragment>
    )
  })
}

const Li = ({ onItemClick, index, item, listItemProps, Child }) => {
  return (
    <Box
      component='li'
      onClick={(e) => onItemClick({ event: e, data: item })}
      sx={{
        listStyle: 'none',
      }}
    >
      <Child index={index} {...item} {...listItemProps} />
    </Box>
  )
}
