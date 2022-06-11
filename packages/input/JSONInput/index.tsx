import JSONEditor from 'react-json-editor-ajrm'
import locale from 'react-json-editor-ajrm/locale/en'

/**
 * {@link https://github.com/AndrewRedican/react-json-editor-ajrm#component-properties|Docs}
 */
export default function JSONInput(props) {
  return <JSONEditor locale={locale} {...props} />
}
