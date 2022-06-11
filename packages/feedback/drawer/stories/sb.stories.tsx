import React, { useState } from 'react'

import B from '../../../storybook/variationBlock/index'
import Drawer from '..'

export default {
  title: 'Feedback/Components/Drawer',
  component: Drawer,
}

const Left = () => {
  const [open, setOpen] = useState(null)
  const toggle = () => setOpen(!open)
  return (
    <B title='left'>
      <button onClick={toggle}>Left</button>
      <Drawer position='left' open={open} onClose={toggle}>
        Hello asdf asdf asdf f asd fasdf fas d
      </Drawer>
    </B>
  )
}

const Top = () => {
  const [open, setOpen] = useState(null)
  const toggle = () => setOpen(!open)
  return (
    <B title='top'>
      <button onClick={toggle}>top</button>
      <Drawer position='top' open={open} onClose={toggle}>
        Hello asdf asdf asdf f asd fasdf fas d asdfasdfasdfasdf asdf asdf as fas fas
        fasdfasdf asdf asdfas fas d
      </Drawer>
    </B>
  )
}

const Right = () => {
  const [open, setOpen] = useState(null)
  const toggle = () => setOpen(!open)
  return (
    <B title='right'>
      <button onClick={toggle}>right</button>
      <Drawer position='right' open={open} onClose={toggle}>
        Hello asdf asdf asdf f asd fasdf fas d
      </Drawer>
    </B>
  )
}

const Bottom = () => {
  const [open, setOpen] = useState(null)
  const toggle = () => setOpen(!open)
  return (
    <B title='bottom'>
      <button onClick={toggle}>bottom</button>
      <Drawer position='bottom' open={open} onClose={toggle}>
        Hello asdf asdf asdf f asd fasdf fas d
      </Drawer>
    </B>
  )
}

const Example = () => (
  <>
    <Left />
    <Top />
    <Right />
    <Bottom />
  </>
)

export const Default = () => <Example />
