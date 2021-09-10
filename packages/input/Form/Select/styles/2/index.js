import styled from 'styled-components'

import Base from '../..'
import baseStyles from '../../styles'

const CS = {
  Select: styled(baseStyles.Select)`
    opacity: 0;
    z-index: 2;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    display: grid;
    justify-content: center;
    align-items: center;
  `,
  LabelWrapper: styled(baseStyles.LabelWrapper)`
    position: relative;
    display: grid;
    align-items: center;
    grid-gap: var(--spacing-xs);
    grid-auto-flow: column;
  `,
  Chevron: styled.div`
    transform: rotate(270deg);
  `,
}

const Select2 = (props) => <Base {...props} CS={CS} />

export default memo(Select2)
