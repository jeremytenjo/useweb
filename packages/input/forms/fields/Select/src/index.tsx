import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button, { type ButtonProps } from '@mui/material/Button'

type Props = {
  name: string
  label: string
  register?: any
  options: {
    label: string
    value: string | number
  }[]
  defaultValue?: string | number
  sx?: object
  color?: string
  onChange?: (value: any) => any
  buttonProps?: ButtonProps
  value?: any
  endIcon?: any
}

export default function Select({
  name,
  label,
  options = [],
  defaultValue = 1,
  register = () => null,
  sx = {},
  color = '#e7e7e7',
  onChange,
  buttonProps = { name: 'Select button' },
  value: parentValue,
  endIcon,
}: Props) {
  const [value, setValue] = useState(parentValue || defaultValue)

  useEffect(() => {
    if (parentValue) setValue(parentValue)
  }, [parentValue])

  const handleValueChange = (event) => {
    const value = event.target.value
    !parentValue && setValue(value)
    onChange && onChange(value)
  }

  const EndIcon = endIcon || defaultEndIcon

  return (
    <Box sx={{ width: '100%', position: 'relative', height: '37px' }}>
      <Button
        sx={{
          position: 'absolute',
          pointerEvents: 'none',
          color,
          borderColor: color,
          ...sx,
        }}
        variant='outlined'
        size='medium'
        endIcon={<EndIcon sx={{ stroke: color, transform: 'translateY(7px)' }} />}
        {...buttonProps}
      >
        {label}
      </Button>

      <label id={name} hidden>
        {label}
      </label>

      <Box
        component='select'
        id={name}
        value={value}
        onChange={handleValueChange}
        {...(!onChange ? register(name) : {})}
        sx={{
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: 0,
        }}
      >
        {options.map((option) => (
          <option key={option.value + option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </Box>
    </Box>
  )
}

const defaultEndIcon = (props) => {
  return (
    <Box {...props}>
      <svg
        width='11'
        height='7'
        viewBox='0 0 11 7'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.25 1.375L5.5 5.625L9.75 1.375'
          strokeWidth='1.41667'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </Box>
  )
}
