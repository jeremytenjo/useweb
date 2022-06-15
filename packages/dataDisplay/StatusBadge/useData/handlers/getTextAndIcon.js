import React from 'react'

import IconLoading from '../../../Icon/library/IconLoadingFeather'
import IconCheckmark from '../../../Icon/library/IconCheckmarkFeather'
import IconClose from '../../../Icon/library/IconCloseFilled'

export default function getTextAndIcon(props) {
  const data = map(props)[props.state]

  return data
}

const map = (props) => ({
  loading: {
    text: props.loadingText || props.text,
    icon: <IconLoading plain size='20px' color='secondary' />,
    foregroundColor: '#8F00FF',
    backgroundColor: '#F3E3FF',
  },
  success: {
    text: props.successText || props.text,
    icon: <IconCheckmark plain size='20px' color='successForeground' />,
    foregroundColor: 'var(--color-successForeground)',
    backgroundColor: '#E4FFE2',
  },
  error: {
    text: props.errorText || props.text,
    icon: <IconClose plain size='20px' color='red' />,
    foregroundColor: 'red',
    backgroundColor: '#FFE3E3',
  },
  disabled: {
    text: props.disabledText || props.text,
    icon: <IconLoading plain size='20px' color='darkgrey' />,
    foregroundColor: 'darkgrey',
    backgroundColor: '#ECECEC',
  },
})
