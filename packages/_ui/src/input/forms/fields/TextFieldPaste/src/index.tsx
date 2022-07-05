import React from 'react'
import Box from '@mui/material/Box'
import { useFormContext } from 'react-hook-form'

import TextField from '../../Textfield/src'
import PasteButton from '../../../../PasteButton/src'

export type TextFieldPasteProps = {
  onPaste: (clipboardData: { clipboardData: any }) => any
  name: string
  placeholder: string
  required?: string
  onChange?: (newValue: any) => any
  onInputClear?: () => any
  LeftIcon?: any
  inputProps?: any
}

export default function TextFieldPaste({
  onPaste,
  required,
  name,
  placeholder,
  onChange,
  onInputClear,
  LeftIcon,
  inputProps = {},
}: TextFieldPasteProps) {
  const form = useFormContext()

  const getLinkFromClipboard = ({ clipboardData, updateTextFieldValue }) => {
    try {
      onPaste({ clipboardData })
      updateTextFieldValue(clipboardData)
    } catch (error) {
      console.log(error)
    }
  }
  const updateTextFieldValue = (value) => {
    form.setValue(name, value)
  }

  return (
    <Box
      data-id='TextFieldPaste'
      sx={{
        display: 'grid',
        gridAutoFlow: 'column',
        justifyContent: 'space-between',
        gridTemplateColumns: '1fr fit-content(100%)',
        gap: 1,
        width: '100%',
      }}
    >
      <TextField
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onInputClear={onInputClear}
        LeftIcon={LeftIcon}
        sx={{
          width: '100%',
          mb: 2,
          '& > div': {
            border: 'none',
          },
        }}
        inputProps={{
          autoComplete: 'off',
          ...inputProps,
        }}
      />

      <PasteButton
        onPaste={({ clipboardData }) =>
          getLinkFromClipboard({ clipboardData, updateTextFieldValue })
        }
      />
    </Box>
  )
}
