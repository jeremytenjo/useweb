import React, { type ReactNode } from 'react'
import Typography, { type TypographyProps } from '@mui/material/Typography'

export type TextProps = {
  text: string | ReactNode
  tag?: any
} & TypographyProps

/**
 * @example
 * <Text text='hello' />
 */
export default function Text({
  text,
  tag = 'p',
  variant = 'body1',
  ...props
}: TextProps) {
  return (
    <Typography component={tag} variant={variant} {...props}>
      {text as any}
    </Typography>
  )
}
