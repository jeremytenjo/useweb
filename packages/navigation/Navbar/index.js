import List from '../../dataDisplay/List'
import Avatar from '../../dataDisplay/Avatar'
import SearchIcon from '../../dataDisplay/Icon/special/search/index'
import Text from '../../dataDisplay/Text/index'

import { defaultProps, propTypes } from './props'
import { Wrapper, ItemWrapper } from './styles'

const NavBar = ({ data, onInput, onSearchSubmit, router, styles }) => {
  return (
    <Wrapper styles={styles}>
      <List
        padding='none'
        style={{
          alignItems: 'center',
          justifyItems: 'center',
          gridAutoColumns: '1fr',
        }}
      >
        {data.map(
          (
            {
              file = null,
              src = null,
              Icon,
              label = {},
              top,
              url,
              iconStyles = { plain: true },
              search,
              placeholder,
            },
            index,
          ) => {
            const {
              history: { push },
              location: { pathname },
            } = router

            const splitUrl = url ? url.split('/')[0] : undefined
            const currentUrl = splitUrl === '/' ? '/' : `/${splitUrl}`
            const splitpathname = pathname ? pathname.split('/')[1] : undefined
            const currentpathname = splitpathname === '/' ? '/' : `/${splitpathname}`
            const isActive = currentpathname === currentUrl
            const inputProps = file ? { onInput } : null
            const key = label.text || currentUrl || index
            const iconPosition = top ? { transform: 'translateY(-30px)' } : null
            const _color = iconStyles.color
              ? iconStyles.color
              : isActive
              ? styles.color || 'primary'
              : 'grey'

            const { styles: labelSyles, variant: labelVariant = 'navbar' } = label
            const labelProps = {
              ...label,
              variant: labelVariant,
              styles: { ...labelSyles, color: _color, transition: '0.2s' },
            }

            const handleClick = () => {
              url && push(`/${url}`)
            }

            return (
              <ItemWrapper
                name='NavBar'
                key={key}
                style={iconPosition}
                onClick={handleClick}
                hasLabel={label}
              >
                {search && (
                  <SearchIcon
                    onSubmit={onSearchSubmit}
                    styles={iconStyles}
                    placeholder={placeholder}
                  />
                )}

                {Icon && (
                  <>
                    <Icon
                      color={_color}
                      label={labelProps}
                      inputProps={inputProps}
                      {...iconStyles}
                    />
                    {label.text && <Text {...labelProps} />}
                  </>
                )}

                {src && (
                  <Avatar
                    src={src}
                    radius={100}
                    borderColor={isActive && styles.color}
                    paddedBorder
                    inputProps={inputProps}
                    size='40px'
                  />
                )}
              </ItemWrapper>
            )
          },
        )}
      </List>
    </Wrapper>
  )
}

NavBar.defaultProps = defaultProps
NavBar.propTypes = propTypes

export default memo(NavBar)
