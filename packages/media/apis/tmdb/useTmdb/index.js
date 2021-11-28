import useFetch from '../../../../utils/fetching/useFetch/src'

const useTmdb = ({
  query,
  type = 'movie',
  apiKey,
  page = '1',
  language = 'en',
  version = 3,
  reqType = 'get',
  action = 'search',
}) => {
  if (!apiKey) throw Error('useTmdb: apiKey required')

  const url = `https://api.themoviedb.org/${version}/${action}/${type}?api_key=${apiKey}&language=e${language}-US&page=${page}&query=${encodeURIComponent(
    query,
  )}`
  const { request: fetchTmdb, response, fetching, error } = useFetch({
    url,
    method: reqType,
  })

  if (response && response.results.length) {
    const { poster_path } = response.results[0]
    const posterUrl = `http://image.tmdb.org/t/p/w185/${poster_path}`
    response.posterUrl = posterUrl
  }

  return { fetchTmdb, fetching, response, error }
}

export default useTmdb
