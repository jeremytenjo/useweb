import Menu_ui from '@material-ui/core/Menu'
import Item from '@material-ui/core/MenuItem'

import { defaultProps, propTypes } from '../../props'

const Menu1 = ({ options, onSelect, itemProps, Icon, ...rest }) => {
  const optionsLength = options.length
  const [anchorEl, setanchorEl] = useState(null)

  const handleClose = ({
    target: {
      dataset: { option: selectedOption },
    },
  }) => {
    setanchorEl(null)
    selectedOption && onSelect(selectedOption)
  }

  const handleClick = ({ currentTarget }) => setanchorEl(currentTarget)

  return (
    <>
      <Icon onClick={handleClick} />

      {optionsLength > 0 && (
        <Menu_ui
          id='simple-menu'
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
          {...rest}
        >
          {options.map(
            (option) =>
              option && (
                <Item
                  key={option}
                  data-option={option}
                  onClick={handleClose}
                  {...itemProps}
                >
                  {option}
                </Item>
              ),
          )}
        </Menu_ui>
      )}
    </>
  )
}

Menu1.defaultProps = defaultProps
Menu1.propTypes = propTypes

export default memo(Menu1)
