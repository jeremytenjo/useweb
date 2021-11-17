import styled from 'styled-components'
import system from '@useweb/style-system'

export const Wrapper = styled.ul`
  ${system}
  /* Shared */
  list-style: none;
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style-type: 0;
  transition: 0.2s;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  display: grid;
  padding: ${({ padding, noPaddingTB, noPaddingSides }) =>
    noPaddingTB
      ? `0 var(--spacing-${padding})`
      : noPaddingSides
      ? `var(--spacing-${padding}) 0`
      : `var(--spacing-${padding})`};
  grid-gap: ${({ gap }) => `var(--spacing-${gap})`};
  grid-auto-flow: ${({ direction }) => direction};

  /* Overflows */
  ${({ overflows, dataLength }) =>
    overflows &&
    `
    overflow: auto;
    overflow-y: hidden;
    grid-template-columns: repeat(${dataLength > 0 && dataLength}, auto);
    grid-template-rows: 100%;
    justify-content: flex-start;

    .min {
      width: 0.1px;
      opacity: 0;
    }
  `}

  /* Grid */
    ${({ grid, repeat, minWidth, repeatOnMinWidth }) =>
    grid &&
    `
      grid-auto-flow: row;
      align-items: stretch;
      grid-template-columns: repeat(${repeat}, minmax(10px, 1fr));

  /* Min Width */
  @media (min-width: ${minWidth}px) {
    grid-template-columns: repeat(${repeatOnMinWidth}, minmax(10px, 1fr));
  }   
    `} 

    /* Grid of photos */
    ${({ photoGrid, repeat, minWidth, repeatOnMinWidth }) =>
    photoGrid &&
    `
      grid-auto-flow: row;
      align-items: stretch;
      grid-template-columns: repeat(${repeat}, minmax(10px, 1fr));
      
      /* Min Width */
  @media (min-width: ${minWidth}px) {
    grid-template-columns: repeat(${repeatOnMinWidth}, minmax(10px, 1fr));
  }   
  li > :first-child {
    padding-top: 100%;
    width: auto;
    height: auto;    
  }
    `}
`
