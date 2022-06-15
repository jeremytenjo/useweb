import React from 'react'
import { Meta } from '@storybook/react'

import Text from '../../_ui/src/dataDisplay/Text/src'
import Link from '../../_ui/src/navigation/Link/src'

export default {
  title: 'Introduction',
  component: () => <p>Introduction</p>,
} as Meta

const Template = () => {
  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '900px',
        display: 'block',
        margin: '0 auto',
      }}
    >
      <img
        src='https://firebasestorage.googleapis.com/v0/b/useweb-lib.appspot.com/o/banners%2FBANNER.svg?alt=media&token=4243d31e-e0e0-4df8-a8c3-74ccb8d242ed'
        style={{
          width: '100%',
          marginBottom: '40px',
        }}
      />

      <Text
        text='@useweb'
        tag='h1'
        sx={{
          mb: 2,
        }}
      />

      <Text
        text='A library of utilities, React components and hooks.'
        tag='p'
        sx={{
          mb: 2,
        }}
      />

      <Link href='https://github.com/jeremytenjo/useweb' newTab>
        Github
      </Link>
    </div>
  )
}

export const Intro = Template.bind({})
