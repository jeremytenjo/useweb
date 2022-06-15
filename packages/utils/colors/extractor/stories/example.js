import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'

import FileUpload from '../../../../media/files/fileInput'
import Image from '../../../../media/images/Image/'
import extractColors from '../'

import imageExample from './image.jpg'

const ColorExtractorExample = () => {
  const [img, setImg] = useState(imageExample)
  const [colors, setColors] = useState({})

  useEffect(() => {
    extract(img)
  }, [])

  const extract = async (img) => {
    const palette = await extractColors(img)
    setColors(palette)
  }

  const handleInput = async (payload) => {
    const { file, fileBase64 } = payload
    if (!file) return null

    setImg(fileBase64)
    extract(fileBase64)
  }

  return (
    <Box styles={{ width: 'fit-content', gridGap: 'm' }}>
      <FileUpload onInput={handleInput} />

      <Image src={img} />

      <Box styles={{ gridGap: 'm', gridAutoFlow: 'column' }}>
        {Object.entries(colors).map((item) => {
          const [title, value] = item
          return (
            <Box key={Math.random()} styles={{ gridGap: 's' }}>
              <span style={{ color: 'white' }}>{title}</span>
              <svg width='50' height='50'>
                <rect width='300' height='100' style={{ fill: value.hex }} />
              </svg>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default ColorExtractorExample
