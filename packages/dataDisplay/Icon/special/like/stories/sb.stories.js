import { storiesOf } from '@storybook/react'

import B from '../../../../../storybook/variationBlock/index'
import Like from '..'

const Example = () => {
  const [liked, setLiked] = useState(null)

  return (
    <>
      <B title='Default ' color='black'>
        <Like
          liked={liked}
          onLike={() => setLiked(true)}
          onUnlike={() => setLiked(false)}
        />
      </B>

      <B title='Liked' color='black'>
        <Like liked onLike={() => setLiked(true)} onUnlike={() => setLiked(false)} />
      </B>
    </>
  )
}
storiesOf('Lib/Data Display/Icon/Special', module).add('Like', () => <Example />)
