/**
 * @typedef {import('react-reconciler').Fiber} Fiber
 * @typedef {import('react-reconciler').Source} Source
 */

/**
 * @param {Fiber} instance
 */
export function getSourceForInstance({ _debugSource }) {
  if (!_debugSource) return

  const {
    // It _does_ exist!
    columnNumber = 1,
    fileName,
    lineNumber = 1,
  } = _debugSource

  return { columnNumber, fileName, lineNumber }
}
