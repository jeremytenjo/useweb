// import { storiesOf } from '@storybook/react'

import React, { useEffect, useState } from 'react'

import B from '../../../storybook/variationBlock/index'
import List from '../../List/index'

export default {}
const illustrationsReq = require.context('./', true, /.js$/)
const illustrationsPaths = illustrationsReq.keys()

const ignorePaths = ['illustration.index', 'illustration.styles', 'illustration.stories']

const Illustrations = () => {
  const [vars, setvars] = useState([])
  useEffect(() => {
    getIconName(illustrationsPaths)
  }, [])

  const getIconName = async (paths) => {
    const helo0 = paths.map(async (icon) => {
      icon = icon.substring(0, icon.length - 3)
      icon = icon.replace('./', '')
      const iconArray = icon.split('.')
      const iconLength = iconArray.length

      let Ill = await import(`./${icon}.js`)
      Ill = Ill.default

      return !ignorePaths.includes(icon) && Ill && iconLength === 1 ? (
        <B key={icon} title={icon} noBackground>
          <Ill />
        </B>
      ) : null
    })

    setvars(await Promise.all(helo0))
  }

  return <List>{vars}</List>
}

// storiesOf('Lib/Data Display/Illustrations', module).add('collection', () => (
//   <Illustrations />
// ))
