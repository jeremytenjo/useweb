import OnSwipe from '../OnSwipe'

const Variants = () => {
  const [dir, setdir] = useState('')
  const handleSwipe = (dir) => {
    console.log(dir)
    setdir(dir)
  }

  return (
    <>
      <OnSwipe onSwipe={handleSwipe}>
        <p style={{ color: 'white' }}>
          Swipe me <span style={{ color: 'green' }}>{dir}</span>
        </p>
      </OnSwipe>
    </>
  )
}

export default memo(Variants)
