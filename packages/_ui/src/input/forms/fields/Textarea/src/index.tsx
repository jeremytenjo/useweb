import React, { useRef } from 'react'
import Box, { type BoxProps } from '@mui/material/Box'
import { useFormContext } from 'react-hook-form'

import Text from '../../../../../dataDisplay/Text/src'

export type TextareaProps = {
  name: string
  placeholder?: string
  sx?: BoxProps['sx']
  id?: string
  textareaProps?: object
  required?: string
  onChange?: (newValue: any) => any
  onInputClear?: () => any
  LeftIcon?: any
  resetIcon?: any
  clearComponent?: any
}

/**
 * @example
 * <Textarea name='recipeQuery' placeholder='Search recipe' />
 */
export default function Textarea({
  name,
  sx = {},
  textareaProps = {},
  placeholder = 'text goes here...',
  id,
  required,
  onChange = () => null,
}: TextareaProps) {
  const inputRef = useRef<any>(null)

  const {
    register,
    watch,
    formState: { errors = {} },
    getValues,
  } = useFormContext()
  const { ref, ...restRegister } = register(name, {
    required,
    onChange: () => onChange(getValues(name)),
  })
  const value = watch(name)
  const error = errors[name]

  return (
    <Box
      sx={{
        display: 'grid',
        width: 'fit-content',
        ...sx,
      }}
    >
      <Box
        id={id}
        sx={{
          display: 'grid',
          backgroundColor: 'white.main',
          padding: '4px',
          borderRadius: '9px',
          transition: '0.2s',
          py: 1,
          border: '2px solid white',
          borderColor: 'grey.light',
          gridAutoFlow: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          gridTemplateColumns: '1fr fit-content(100%)',
          gap: 1,
          '&:focus': {
            borderColor: 'primary.main',
          },
        }}
      >
        <Box
          component='textarea'
          placeholder={placeholder}
          {...restRegister}
          ref={(e) => {
            ref(e)
            inputRef.current = e
          }}
          sx={{
            outline: 'none',
            border: 'none',
            fontSize: '16px',
            minWidth: 'fill-available',
          }}
          {...textareaProps}
        />
      </Box>

      {error && error.type === 'required' && value === '' && (
        <Text
          text={error.message}
          sx={{
            color: 'error.main',
            mt: 2,
          }}
        />
      )}
    </Box>
  )
}
