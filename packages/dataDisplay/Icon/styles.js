import styled from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;
  width: fit-content;
  display: grid;
  user-select: none;
  cursor: pointer;
  align-content: space-between;

  ${({ label }) =>
    label &&
    `    
  grid-gap: var(--spacing-xxs);
  justify-items: center;
  `};
`
export const WrapperIcon = styled.div`
  display: flex;
  transition: 0.3s;
  border-radius: 100px;
  animation-timing-function: ease-out;
  padding: ${({ backgroundSize }) =>
    backgroundSize ? `${backgroundSize}` : 'var(--spacing-xs, 10px)'} ;  
  
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (hover: hover) {
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  
  /* backgroundColor */
  ${({ backgroundColor }) =>
    !!backgroundColor &&
    `
    background-color: var(--color-${backgroundColor});    
    border: 2px solid var(--color-${backgroundColor});

    &:active {
    background-color: var(--color-${backgroundColor});   
    border: 2px solid var(--color-${backgroundColor});
    }

    @media (hover: hover) {
    &:hover {
    background-color: var(--color-${backgroundColor});   
    border: 2px solid var(--color-${backgroundColor});
    }
}
  `}
 
     /* Outlined */
    ${({ outlined, color }) =>
      outlined &&
      `
  border: 2px solid var(--color-${color}Darker);

    &:active {
    background-color: var(--color-${color}Background);   
    border: 2px solid var(--color-${color}Darker);
    }

    @media (hover: hover) {
    &:hover {
    background-color: var(--color-${color}Background);   
    border: 2px solid var(--color-${color}Darker);
    }
  `}

      /* Plain */
      ${({ plain }) =>
        plain &&
        `     
        width: auto;
        height: auto;
        padding: 0;
        
  &:active {
    background-color: transparent;
    border: none;    
    }

    @media (hover: hover) {
      &:hover {
    background-color: transparent;
    border: none;    
    }
    }

  `}

  svg {
    transition: 0.2s;
    color: ${({ color, dark }) =>
      color && !dark
        ? `var(--color-${color})`
        : color && dark
        ? `var(--color-${color}Darker)`
        : 'var(--color-white)'};
    fill: ${({ color, dark }) =>
      color && !dark
        ? `var(--color-${color})`
        : color && dark
        ? `var(--color-${color}Darker)`
        : 'var(--color-white)'};
    
    align-self: center;
    ${({ width, size }) => `width: ${width || size};`}
    ${({ height, size }) => `height: ${height || size};
    `}
     /*  No Background */
  ${({ noBackground }) =>
    noBackground &&
    `    
   width: auto;
   `}

       /* Outlined */
       ${({ outlined, color }) =>
         outlined &&
         `
         fill: var(--color-${color}Darker);
  `}

     /* Stroke */
     ${({ color, isStroke }) =>
       isStroke &&
       `
     fill: none;
     stroke: var(--color-${color});     
     `}


`
