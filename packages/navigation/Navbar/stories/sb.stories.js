import { storiesOf } from '@storybook/react'

import BrowserRouter from '../../router/BrowserRouter'
import useNavigate from '../../router/useNavigate'
import useLocation from '../../router/useLocation'
import B from '../../../storybook/variationBlock/index'
import Bar from '../index'

import data from './navBar.links'
import data2 from './navBar.links2'

const testFileInput = (file) => console.log(file)

const Examples = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const router = { history: { push: navigate }, location }

  return (
    <>
      <B title='Example 1' noBackground style={{ width: 'auto' }}>
        <Bar router={router} data={data} onInput={testFileInput} />
      </B>
      <B title='Example 2' noBackground style={{ width: 'auto' }}>
        <Bar
          router={router}
          data={data2}
          onInput={testFileInput}
          onSearchSubmit={(value) => console.log(value)}
        />
      </B>
      <B
        noBackground
        style={{
          width: 'auto',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Bar
          router={router}
          data={data2}
          onInput={testFileInput}
          onSearchSubmit={(value) => console.log(value)}
        />
      </B>
    </>
  )
}

const Variations = () => {
  return (
    <BrowserRouter>
      <Examples />
    </BrowserRouter>
  )
}

storiesOf('Lib/Navigation/NavBar', module).add('Example', () => <Variations />)
