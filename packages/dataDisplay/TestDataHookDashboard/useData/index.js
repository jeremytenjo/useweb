import useFetching from './handlers/useFetching'
import useValidation from './handlers/useValidation'

export default function useData(props) {
  const fetch = useFetching({ props })
  const validation = useValidation({ props, fetch })

  return { fetch, validation, props }
}
