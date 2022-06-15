import React, { Fragment, useEffect, useState } from 'react'

import B from '../variationBlock'

import { Wrapper, titleStyle } from './styles'
import FunctionVariationComponent from './utils/functionVariationComponent'

export default ({
  styles,
  Variants,
  dir,
  type = 'styles/',
  getSpecTestValue = false,
  onlyBase = false,
  noBase = false,
}) => {
  const [Components, setComponents] = useState(null)
  const stylesPath = styles?.keys()

  useEffect(() => {
    getComponents()
  }, [])

  const getComponents = async () => {
    let allImportedComoponents = []
    let styleComponents = []

    // 1. import base component
    if (!noBase) {
      const baseComponentImport = (await import(`../../../src/${dir}/index.js`)).default
      const BaseComponent = () => (
        <Fragment key='base-compo'>
          <B
            title={
              baseComponentImport.displayName ||
              baseComponentImport.name ||
              baseComponentImport.type.displayName ||
              baseComponentImport.type.name
            }
            noBackground
            titleStyle={titleStyle}
          >
            <Variants Component={baseComponentImport} />
          </B>
        </Fragment>
      )

      allImportedComoponents.push(BaseComponent())
    }

    // 2. import style components
    if (stylesPath && !onlyBase) {
      const importedStyleComponents = stylesPath.map(async (location) => {
        const styleName = location.split('/')[1]
        const { default: Comp, testValue } = await import(
          `../../../src/${dir}/${type}${styleName}/index`
        )
        const title = Comp.displayName || Comp.type.displayName || Comp.type.name
        let Component = Variants ? <Variants Component={Comp} /> : null

        if (getSpecTestValue) {
          Component = (
            <FunctionVariationComponent func={Comp} title={title} testValue={testValue} />
          )
        }

        const StyleComponent = () => (
          <Fragment key={title}>
            <B title={title} noBackground titleStyle={titleStyle}>
              {Component}
            </B>
          </Fragment>
        )

        return StyleComponent()
      })

      styleComponents = await Promise.all(importedStyleComponents)
    }

    // 3. merge base and syles components
    allImportedComoponents = [...allImportedComoponents, ...styleComponents]

    const wrapper = <Wrapper>{allImportedComoponents}</Wrapper>

    setComponents(wrapper)
  }

  return Components
}
