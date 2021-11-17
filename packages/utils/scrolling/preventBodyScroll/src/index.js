import { Document, Window } from '@useweb/dom'

const body = Document().querySelector('body')

const preventBodyScroll = (prevent, { persist, force } = {}) => {
  if (prevent && !persist) preventScroll()

  if (prevent && persist) {
    Window().persistPreventBodyScroll = true
    preventScroll()
  }

  if (!prevent && force) enableScroll()

  if (!prevent) {
    const wasPersisted = Window().persistPreventBodyScroll === true
    if (wasPersisted) return
    enableScroll()
  }
}

const enableScroll = () => (body.style.overflow = 'auto')

const preventScroll = () => (body.style.overflow = 'hidden')

export default preventBodyScroll

// Options
// persist - prevents future triggers from reverting body scroll.
// force  - overrides persited prevention
