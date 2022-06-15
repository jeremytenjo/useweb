import React from 'react'
import Box from '@mui/material/Box'
import objectToArray from '@useweb/object-to-array'
import flattenObject from '@useweb/flatten-object'

import Swatch from './Swatch/Swatch'
import * as styles from './styles'

export default function Palette({ colors = {} }) {
  const flattenObj = flattenObject(colors)
  const colorsArray = objectToArray(flattenObj) || []

  return (
    <Box sx={styles.wrapper}>
      {colorsArray.map((color) => {
        return (
          <Swatch
            key={Object.keys(color)[0]}
            name={Object.keys(color)[0]}
            color={Object.values(color)[0]}
          />
        )
      })}
    </Box>
  )
}
