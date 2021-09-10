/**
 * @example
 * urlParams('path')
 */
export default function getSearchParam(param) {
  const parsedUrl = new URL(window.location)
  const value = parsedUrl.searchParams.get(param)

  return value
}
