import styled from 'styled-components'

import SelectBase from '../..'
import baseStyles from '../../styles'

const CS = {
  SelectWrapper: styled(baseStyles.SelectWrapper)`
    ${({ size }) =>
      size &&
      `
    width: ${size};
    height: ${size};
  `}
    ${({ backgroundColor }) =>
      backgroundColor &&
      `
    background-color: var(--color-${backgroundColor});
  `}
    border-radius: 100px;

    position: relative;
  `,
  TitleWrapper: styled(baseStyles.TitleWrapper)`
    text-align: center;
    margin-top: var(--spacing-xxs);
  `,
  LabelWrapper: styled(baseStyles.LabelWrapper)`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 0;
    left: 0;
    display: grid;
    justify-content: center;
    align-items: center;
    z-index: 1;
  `,
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
}

const Select1 = (props) => <SelectBase {...props} CS={CS} />

export default memo(Select1)
