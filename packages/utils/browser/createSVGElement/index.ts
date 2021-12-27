export default function createSVGElement(element: 'svg' | 'path' | 'rect' | 'circle') {
  const svgElement = document.createElementNS('http://www.w3.org/2000/svg', element)
  return svgElement
}
