import createSVGElement from '../../../../createSVGElement'

const wrapperClass = 'pull-to-refresh-material'

export const isRefreshElementAdded = () => {
  return !!document.getElementsByClassName(wrapperClass).length
}

export default function createRefreshElement({ color }) {
  const bodyElement = document.body

  if (!isRefreshElementAdded()) {
    // wrapper
    const wrapper = document.createElement('div')
    wrapper.setAttribute('class', wrapperClass)
    wrapper.style.zIndex = '999'

    // control
    const control = document.createElement('div')
    control.setAttribute('class', 'pull-to-refresh-material__control')

    // icon
    const icon = createSVGElement('svg')
    icon.setAttribute('class', 'pull-to-refresh-material__icon')
    icon.setAttribute('width', '24')
    icon.setAttribute('height', '24')
    icon.setAttribute('viewbox', '0 0 24 24')
    icon.style.fill = color

    const iconPath1 = createSVGElement('path')
    iconPath1.setAttribute(
      'd',
      'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z',
    )
    const iconPath2 = createSVGElement('path')
    iconPath2.setAttribute('d', 'M0 0h24v24H0z')
    iconPath2.setAttribute('fill', 'none')

    icon.appendChild(iconPath1)
    icon.appendChild(iconPath2)

    control.appendChild(icon)

    // spinner
    const spinner = createSVGElement('svg')
    spinner.setAttribute('class', 'pull-to-refresh-material__spinner')
    spinner.setAttribute('width', '24')
    spinner.setAttribute('height', '24')
    spinner.setAttribute('viewbox', '25 25 50 50')
    spinner.style.fill = color

    const circle = createSVGElement('circle')
    circle.setAttribute('class', 'pull-to-refresh-material__path')
    circle.setAttribute('cx', '50')
    circle.setAttribute('cy', '50')
    circle.setAttribute('r', '20')
    circle.setAttribute('fill', 'none')
    circle.setAttribute('stroke-width', '4')
    circle.setAttribute('stroke-miterlimit', '10')

    spinner.appendChild(circle)

    control.appendChild(spinner)

    // end
    wrapper.appendChild(control)
    bodyElement.appendChild(wrapper)
  }
}
