export const wrapper = {
  position: 'relative',
  backgroundColor: '--#F8F8FF',
  borderRadius: '10px',
  raw: `pre {
    border: none;
    margin: 0;
    line-height: normal;
  }`,
}

export const icon = {
  position: 'absolute',
  right: '--5px',
  top: '--5px',
  transition: '.2s',
  ':active': {
    transform: 'translateY(4px)',
  },
}
