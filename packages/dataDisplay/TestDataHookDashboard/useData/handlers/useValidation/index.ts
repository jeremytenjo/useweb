import { useEffect } from 'react'

import useJoiValidator from '../../../../../data/joi/useJoiValidator'

export default function useValidation({ props, fetch }) {
  const validateFetchResult = props.schema
  const schemaValidation = useJoiValidator({
    schema: props.schema,
    data: fetch.result,
  })

  const validate = () => {
    schemaValidation.validate(fetch.result)
  }

  useEffect(() => {
    if (fetch.result && validateFetchResult) validate()
  }, [fetch.result])

  return { validateFetchResult, ...schemaValidation }
}
