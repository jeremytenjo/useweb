// https://docs.github.com/en/free-pro-team@latest/developers/apps/authorizing-oauth-apps#web-application-flow

import useFetch from '../../../../../utils/fetching/useFetch'

const useSignInToGithub = () => {
  const [accessToken, setGithubAccessToken] = useState(process?.env?.GITHUB_ACCESS_TOKEN)
  const client_secret = process?.env?.GITHUB_CLIENT_SECRET
  const client_id = process?.env?.GITHUB_CLIENT_ID
  const redirect_uri =
    'http://localhost:9002/iframe.html?id=libs-data-github-usegithub--sign-in-to-github&viewMode=story'
  const state = 'radnomostringo'
  const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&state=${state}&redirect_uri=${redirect_uri}&scope=repo&authorize=1`
  const asyncFetch = useFetch()

  useEffect(() => {
    getAccessToken()
  }, [])

  const getAccessToken = async () => {
    const params = new URLSearchParams(document.location.search.substring(1))
    const code = params.get('code')

    if (code) {
      const to = await fetch(
        `https://github.com/login/oauth/access_token?client_secret=${client_secret}&client_id=${client_id}&code=${code}`,
        {
          credentials: 'same-origin',
          'Access-Control-Allow-Origin': '*',
          headers: {
            Accept: 'application/json',
          },
        },
      )
      const res = await to.json()
      const { access_token } = res
      setGithubAccessToken(access_token)
    }
  }

  const exec = async () => {
    await asyncFetch.request({ method: 'HEAD', credentials: 'include', mode: 'no-cors' })
    window.location = url
  }

  return {
    exec,
    loading: asyncFetch.fetching,
    accessToken,
  }
}

export default useSignInToGithub
