import { defaultProps } from './props'
import useData from './useData'
import Ui from './Ui'

export default function TextArea(props) {
  const data = useData(props)
  return <Ui {...data} props={props} />
}

TextArea.defaultProps = defaultProps
