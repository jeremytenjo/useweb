import onSwipeFunction from '../../onSwipe'

export default function OnSwipe({
  onSwipe = () => null,
  onSwipeLeft = () => null,
  onSwipeRight = () => null,
  onSwipeUp = () => null,
  onSwipeDown = () => null,
  children,
}) {
  const wrapperRef = useRef(null)

  useEffect(() => {
    const removeListeners = onSwipeFunction(wrapperRef.current, handleSwipe)
    return () => removeListeners()
  }, [])

  const handleSwipe = ({ dir }) => {
    onSwipe(dir)

    switch (dir) {
      case 'right':
        onSwipeRight()
        break
      case 'left':
        onSwipeLeft()
        break
      case 'up':
        onSwipeUp()
        break
      case 'down':
        onSwipeDown()
        break
    }
  }

  return <div ref={wrapperRef}>{children}</div>
}
