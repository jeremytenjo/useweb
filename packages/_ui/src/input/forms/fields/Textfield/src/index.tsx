import React, { useRef } from 'react'
import Box, { type BoxProps } from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { useFormContext } from 'react-hook-form'

import Text from '../../../../../dataDisplay/Text/src'

export type TextfieldProps = {
  name: string
  placeholder?: string
  sx?: BoxProps['sx']
  id?: string
  inputProps?: object
  required?: string
  onChange?: (newValue: any) => any
  onInputClear?: () => any
  LeftIcon?: any
  resetIcon?: any
  clearComponent?: any
}

/**
 * @example
 * <Textfield name='recipeQuery' placeholder='Search recipe' />
 */
export default function TextField({
  name,
  sx = {},
  inputProps = {},
  placeholder = '',
  id,
  required,
  onChange = () => null,
  onInputClear = () => null,
  LeftIcon,
  resetIcon,
  clearComponent,
}: TextfieldProps) {
  const inputRef = useRef<any>(null)

  const {
    register,
    watch,
    setValue,
    formState: { errors = {} },
    getValues,
  } = useFormContext()
  const { ref, ...restRegister } = register(name, {
    required,
    onChange: () => onChange(getValues(name)),
  })
  const value = watch(name)
  const error = errors[name]

  const clearInput = () => {
    setValue(name, '', { shouldValidate: true })
    inputRef.current && inputRef.current.focus()
    onInputClear()
  }

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
          gridTemplateColumns: LeftIcon
            ? 'fit-content(100%) 1fr fit-content(100%)'
            : '1fr fit-content(100%)',
          gap: 1,
          '&:focus': {
            borderColor: 'primary.main',
          },
        }}
      >
        {LeftIcon && (
          <Box
            sx={{
              pl: '9px',
              display: 'grid',
              alignItems: 'center',
              '& svg': {
                width: '20px',
                height: '20px',
              },
            }}
          >
            {LeftIcon}
          </Box>
        )}

        <Box
          component='input'
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
          {...inputProps}
        />

        {clearComponent ? (
          <Box
            sx={{
              visibility: value !== '' ? 'visible' : 'hidden',
            }}
          >
            {clearComponent}
          </Box>
        ) : (
          <IconButton
            name='Textfield button'
            aria-label='reset'
            onClick={clearInput}
            sx={{
              visibility: value !== '' ? 'visible' : 'hidden',
              width: '24px',
              height: '24px',
              border: 'none',
              display: 'grid',
              alignItems: 'center',
              p: '0px',
            }}
          >
            {resetIcon || (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
              >
                <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
                <path d='M0 0h24v24H0z' fill='none'></path>
              </svg>
            )}
          </IconButton>
        )}
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
