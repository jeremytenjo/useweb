import React, { useEffect, useState } from 'react'
import Button, { type ButtonProps } from '@mui/material/Button'

export type PasteButtonProps = {
  text?: string
  onPaste: (clipboardData: { clipboardData: any }) => any
  onError?: (error: any) => any
  sx?: ButtonProps['sx']
}

export default function PasteButton({
  onPaste,
  onError,
  text = 'Paste',
  sx = {},
}: PasteButtonProps) {
  const [isClipboardAPIAvailable, setIsClipboardAPIAvailable] = useState(false)

  useEffect(() => {
    if (isClipboardApiAvailableInThisDevice()) {
      setIsClipboardAPIAvailable(true)
    } else {
      setIsClipboardAPIAvailable(false)
      console.warn('clipboard API is not available in this device')
    }
  }, [])

  const getLinkFromClipboard = async () => {
    try {
      const clipboardData = await navigator.clipboard.readText()
      onPaste({ clipboardData })
    } catch (error) {
      console.log({ error })
      onError && onError({ error })
    }
  }

  return isClipboardAPIAvailable ? (
    <Button
      name='Paste Button'
      onClick={getLinkFromClipboard}
      variant='contained'
      sx={{
        color: 'black.main',
        backgroundColor: 'white.main',
        mb: 2,
        justifySelf: 'center',
        width: '100%',
        ...sx,
      }}
    >
      {text}
    </Button>
  ) : null
}

export function isClipboardApiAvailableInThisDevice() {
  let isAvailable = false

  if (typeof navigator !== 'undefined') {
    isAvailable = !!navigator.clipboard
  }

  return isAvailable
}
