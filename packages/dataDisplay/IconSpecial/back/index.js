import Icon from '../..'

const IconBack = ({
  onGoBack = () => null,
  to = null,
  icon = 'arrow/material',
  router = { push: () => null },
}) => {
  const { push } = router

  const goBack = () => {
    to ? push(to) : goBack()
    onGoBack()
  }

  return <Icon name={icon} onClick={goBack} />
}

export default memo(IconBack)
