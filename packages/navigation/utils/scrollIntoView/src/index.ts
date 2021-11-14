type Props = {
  id: string
  behavior?: ScrollBehavior
  inline?: ScrollLogicalPosition
  block?: ScrollLogicalPosition
}

export default function scrollIntoView({
  id,
  behavior = 'smooth',
  inline = 'nearest',
  block = 'start',
}: Props) {
  if (!id)
    return console.error('scrollIntoView error - add a selector as the first parameter')

  const element = document.querySelector(id)

  if (element) {
    element.scrollIntoView({
      behavior,
      inline,
      block,
    })
  }
}
