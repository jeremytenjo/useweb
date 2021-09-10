import { Wrapper } from './tabs.base.styles'
import { defaultProps, propTypes } from './tabs.base.props'

const Tabs = ({ Tab, data, color, font, style, router }) => {
  const {
    history: { push },
    location: { pathname },
  } = router

  //Template
  return (
    <Wrapper style={{ ...style }} color={color}>
      {data.map(({ label, link }) => {
        const active = pathname === link

        return (
          <Tab
            color={color}
            key={label}
            onClick={() => push(link)}
            font={font}
            active={active}
          >
            <span>{label}</span>
          </Tab>
        )
      })}
    </Wrapper>
  )
}

Tabs.defaultProps = defaultProps
Tabs.propTypes = propTypes

export default Tabs
