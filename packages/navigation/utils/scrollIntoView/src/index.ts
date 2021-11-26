type Props = {
  selector: string
  behavior?: ScrollBehavior
  inline?: ScrollLogicalPosition
  block?: ScrollLogicalPosition
}

export default function scrollIntoView({
  selector,
  behavior = 'smooth',
  inline = 'nearest',
  block = 'start',
}: Props) {
  if (!selector)
    return console.error('scrollIntoView error - add a selector as the first parameter')

  const element = document.querySelector(selector)

  if (element) {
    element.scrollIntoView({
      behavior,
      inline,
      block,
    })
  }
}
