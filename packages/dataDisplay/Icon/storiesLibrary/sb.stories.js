import { storiesOf } from '@storybook/react'

import B from '../../../storybook/variationBlock/index'
import List from '../../List/index'

const pathsToIgnore = ['./IconSets.stories.js']

const iconsReq = require.context('../library', true, /.js$/)
const iconsPaths = iconsReq.keys()

const iconNames = {}

iconsPaths.map((path) => {
  const split = path.split('/')
  const shortname = split[1]
  const hasKey = Object.prototype.hasOwnProperty.call(iconNames, shortname)
  const isStory = shortname === 'stories'

  if (!isStory) {
    if (hasKey) iconNames[shortname].push(path)
    else iconNames[shortname] = [path]
  }
})

const loadIcons = () => {
  for (const [key, value] of Object.entries(iconNames)) {
    if (!pathsToIgnore.includes(`./${key}`)) {
      storiesOf('Lib/Data Display/Icon/Library', module).add(key, () => {
        const [iconsList, seticonsList] = useState([])
        useEffect(() => {
          createIconsList()
        }, [])

        const createIconsList = async () => {
          const list = await Promise.all(
            value.map(async (path) => {
              const split = path.split('/')
              split.shift()
              let longName = split.join('/')
              longName = longName.substring(0, longName.length - 3)
              longName = longName.replace('/index', '')
              const { default: Comp } = await import(`../library/${longName}`)

              return (
                <B key={longName} title={longName} color='black'>
                  <Comp />
                </B>
              )
            }),
          )
          seticonsList(list)
        }

        return <List grid>{iconsList}</List>
      })
    }
  }
}

loadIcons()
