import styled from 'styled-components'

import TextArea from '../..'

export default function TextAreaStyle1(props) {
  return (
    <TextArea
      {...props}
      Styles={styled.div`
        width: 100%;

        textarea {
          box-sizing: border-box;
          transition: border 0.2s;
          width: 100%;
          border-radius: 10px;
          border: 2px solid var(--color-lightgrey);
          outline: none;
          resize: none;
          padding: var(--spacing-xs) var(--spacing-xs);
          font-family: var(--font-primary);
          min-height: 48px;
          line-height: 21px;
          :focus {
            border: 2px solid var(--color-primary);
          }

          ::-webkit-scrollbar {
            width: 10px;
          }

          ::-webkit-scrollbar-track {
            border-radius: 10px;
          }

          ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: var(--color-lightgrey);
            border-top-right-radius: 23px;
            border-bottom-right-radius: 23px;
          }
        }
      `}
    />
  )
}
