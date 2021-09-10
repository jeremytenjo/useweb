import styled from 'styled-components'

import Base from '../..'
import baseStyles from '../../styles'

export default function Select3(props) {
  return (
    <Base
      {...props}
      CS={{
        Wrapper: styled(baseStyles.SelectWrapper)`
          background-color: var(--color-white);
          border: 2px solid var(--color-lightgrey);
          padding: var(--spacing-xxs, 4px) var(--spacing-xs, 8px);
          border-radius: 10px;
          transition: 0.2s;
          font-family: var(--font-primary);
          font-size: 14px;
          height: 36px;
          align-items: center;
          position: relative;
          display: flex;
          color: var(--color-black);
          ${(props) =>
            props.selectIsFocused &&
            `
        border: 2px solid var(--color-primary);
      `}
        `,
        SelectWrapper: styled.div`
          width: 100%;
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
          width: 100%;
        `,
        LabelWrapper: styled(baseStyles.LabelWrapper)`
          position: relative;
          display: grid;
          align-items: center;
          grid-gap: var(--spacing-xs);
          grid-template-columns: 1fr auto;
          justify-content: space-between;
        `,
        Chevron: styled.div`
          transform: rotate(270deg) translateY(-12px);
          svg {
            color: var(--color-black);
            fill: var(--color-black);
          }
        `,
      }}
    />
  )
}
