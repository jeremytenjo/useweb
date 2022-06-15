const { readFile } = require('fs-extra')
const SVGO = require('svgo')
const isSvg = require('is-svg')

const log = require('../../../../../utils/log')
const createFile = require('../../../../../utils/files/createFile')

export default async function resizeSvg({ sourcePath, outputPath, width, height }) {
  const svgContent = await readFile(sourcePath)
  const isSVG = isSvg(svgContent)
  if (!isSVG) log(`${sourcePath} is not an SVG`, { error: true })

  const { data: editedSVG } = await SVGO.optimize(svgContent, {
    path: sourcePath,
    plugins: [
      {
        // https://github.com/svg/svgo/blob/master/plugins/removeDimensions.js
        name: 'removeDimensions',
        attributes: {
          width: false,
          height: false,
        },
      },
      {
        // https://github.com/svg/svgo/blob/master/plugins/addAttributesToSVGElement.js
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [`width="${width}"`, `height="${height}"`],
        },
      },
      {
        // https://github.com/svg/svgo/blob/master/plugins/removeViewBox.js
        name: 'removeViewBox',
        attributes: {
          viewBox: false,
        },
      },
    ],
  })

  createFile(outputPath, editedSVG, { nojs: true })
}
