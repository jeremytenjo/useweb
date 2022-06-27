import React, { Fragment } from 'react'
import Box, { type BoxProps } from '@mui/material/Box'

export type ListProps = {
  data: any[]
  ListItemComponent: any
  listItemProps?: any
  sx?: BoxProps['sx']
  onItemClick?: (data: { data: any }) => any
}

export default function List({
  data = [],
  ListItemComponent,
  listItemProps = {},
  sx = {},
  onItemClick = () => null,
}: ListProps) {
  return (
    <Wrapper sx={sx as any} data-id='List'>
      <Items
        data={data}
        ListItemComponent={ListItemComponent}
        listItemProps={listItemProps}
        onItemClick={onItemClick}
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

const Items = ({ data, ListItemComponent, listItemProps = {}, onItemClick }) => {
  return data.map((item, index) => {
    return (
      <Fragment key={item.id + Math.random() + index}>
        <Box
          component='li'
          onClick={(e) => onItemClick({ event: e, data: item })}
          sx={{
            listStyle: 'none',
          }}
        >
          <ListItemComponent index={index} {...item} {...listItemProps} />
        </Box>
      </Fragment>
    )
  })
}
