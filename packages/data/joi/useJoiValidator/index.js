import useAsync from '../../useAsync'

/**
 * {@link https://joi.dev/api/|Docs}
 * @example
 * const schemaValidation = useJoiValidator({schema, data})
 */
export default function useJoiValidator({ schema, data }) {
  const fetcher = async (data) => {
    return await schema.validateAsync(data)
  }

  const { loading: validating, result, error, exec } = useAsync(fetcher)

  const validate = () => {
    exec(data)
  }

  return { validating, validate, result, error }
}
