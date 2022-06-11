import React from 'react'
import {
  func,
  array,
  arrayOf,
  object,
  shape,
  bool,
  string,
  number,
  oneOfType,
} from 'prop-types'

import Input from '../../input/Form/TextField/styles/1'

export const defaultProps = {
  senderIds: [],
  CurrentUserComp: ({ message }) => <div>{message}</div>,
  OtherUserComp: ({ message }) => <div>{message}</div>,
  onReachedTop: null,
  InputComp: Input,
  wrapperStyles: {},
  messagesData: [],
  previousMessageData: [],
  fetchingPreviousMessageData: false,
  LoadingComp: () => <div>Loading...</div>,
  onSubmit: null,
}

export const propTypes = {
  senderIds: array,
  CurrentUserComp: func,
  OtherUserComp: func,
  onReachedTop: func,
  InputComp: object,
  wrapperStyles: object,
  messagesData: arrayOf(
    shape({
      id: oneOfType([string, number]),
      userId: oneOfType([string, number]),
    }),
  ).isRequired,
  previousMessageData: arrayOf(
    shape({
      id: oneOfType([string, number]),
      userId: oneOfType([string, number]),
    }),
  ).isRequired,
  fetchingPreviousMessageData: bool,
  LoadingComp: func,
  onSubmit: func,
}
