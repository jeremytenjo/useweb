import TabsMui from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { Wrapper } from './styles'
import { defaultProps, propTypes } from './props'

const Tabs = ({ data, color, style, router }) => {
  const {
    history: { push },
    location: { pathname },
  } = router
  const tabWidth = 100 / data.length
  let currentTabIndex

  currentTabIndex = data.findIndex((tab) => tab.link === pathname)
  currentTabIndex === -1 && (currentTabIndex = 0)

  //Template
  return (
    <Wrapper style={{ ...style }} color={color}>
      <TabsMui
        value={currentTabIndex}
        indicatorColor={color}
        textColor={color}
        variant='fullWidth'
      >
        {data.map((item) => (
          <Tab
            style={{
              width: tabWidth,
              color: `var(--color-${color})`,
            }}
            key={item.label}
            label={item.label}
            onClick={() => push(item.link)}
          />
        ))}
      </TabsMui>
    </Wrapper>
  )
}

Tabs.defaultProps = defaultProps
Tabs.propTypes = propTypes

export default Tabs
