import getTextAndIcon from './handlers/getTextAndIcon'

export default function useData(props) {
  const { text, icon, foregroundColor, backgroundColor } = getTextAndIcon(props)

  return { text, icon, foregroundColor, backgroundColor }
}
