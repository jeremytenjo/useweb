import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import MuiSelect from '@mui/material/Select'
import { Controller, useFormContext } from 'react-hook-form'

export type SelectProps = {
  name: string
  label: string
  options: {
    label: string
    value: string | number
  }[]
  defaultValue?: string | number
  sx?: object
  onChange?: (value: any) => any
}

export default function Select({
  name,
  label,
  options = [],
  defaultValue = 1,
  sx = {},
  onChange: hookOnChange,
}: SelectProps) {
  const formContext = useFormContext()

  return (
    <Controller
      name={name}
      control={formContext.control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, ref } }) => (
        <MuiSelect
          ref={ref}
          labelId={`select_${name}`}
          id={name}
          value={value}
          label={label}
          onChange={(data) => {
            onChange(data)
            hookOnChange && hookOnChange(data)
          }}
          sx={sx}
        >
          {options.map((o) => (
            <MenuItem key={o.value} value={o.value}>
              {o.label}
            </MenuItem>
          ))}
        </MuiSelect>
      )}
    />
  )
}
