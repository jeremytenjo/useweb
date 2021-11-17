const Document = () => {
  if (typeof document !== 'undefined') return document

  return {
    isUndefined: true,
    querySelector: () => ({ style: {} }),
  }
}

export default Document
