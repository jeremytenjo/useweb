import urlParams from '../../data/url/getSearchParam'

export default function isDocsPage() {
  const path = urlParams('path')
  if (!path) return null
  const isDocs = path.includes('docs')
  return isDocs
}
