import Buttom from '../../../../input/Button'

import { defaultProps, propTypes } from './emptyPage.props'
import { Wrapper, InnerWrapper, Title } from './emptyPage.styles'

const EmptyPage = ({ image, title, buttonText, redUrl, router }) => {
  const { push } = router

  const redirect = () => push(redUrl)

  return (
    <Wrapper>
      <InnerWrapper>
        {image}
        <Title>{title}</Title>
        <Buttom
          href={redUrl}
          text={buttonText}
          onClick={redirect}
          style={{ width: 250 }}
        />
      </InnerWrapper>
    </Wrapper>
  )
}

EmptyPage.defaultProps = defaultProps
EmptyPage.propTypes = propTypes

export default memo(EmptyPage)
