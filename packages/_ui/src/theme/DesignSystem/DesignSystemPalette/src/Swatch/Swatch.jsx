import React from 'react'
import Box from '@mui/material/Box'

export default function Swatch({ name, color }) {
  return (
    <Wrapper>
      <ColorBlock color={color} />
      <ColorInfo name={name} color={color} />
    </Wrapper>
  )
}

const Wrapper = ({ children }) => {
  return (
    <Box
      data-id='Swatch'
      sx={{
        borderRadius: '0 0 10px 10px',
        boxShadow:
          '0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)',
      }}
    >
      {children}
    </Box>
  )
}

const ColorBlock = ({ color }) => {
  return (
    <Box
      data-id='ColorBlock'
      sx={{
        background: color,
        padding: '20px',
        minWidth: '200px',
        height: '200px',
        display: 'grid',
        alignItems: 'end',
        overflow: 'auto',
        borderRadius: '10px 10px 0 0',
      }}
    />
  )
}

const ColorInfo = ({ name, color }) => {
  return (
    <Box
      data-id='ColorInfo'
      sx={{
        height: 'fit-content',
        display: 'grid',
        gridGap: 10,
        color: 'black.main',
        p: 2,
        borderRadius: '0 0 10px 10px',
      }}
    >
      <span>{name}</span>
      <span>{color}</span>
    </Box>
  )
}
