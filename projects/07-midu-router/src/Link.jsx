import { EVENTS, BUTTONS } from './assets/const'

export function navigate (href) {
  window.history.pushState({}, '', href)
  // Crear un evento para avisar q cambiamos la url
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (e) => {
    const isMainEvent = e.button === BUTTONS.PRIMARY // Click Primario
    const isModifiedEvent = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      e.preventDefault()

      navigate(to)
    }
  }

  return (
    <a onClick={handleClick} href={to} target={target} {...props} />
  )
}
