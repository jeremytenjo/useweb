import useSignInToGithub from './methods/useSignInToGithub'
import useOktokit from './methods/useOctokit'

export const GithubContext = createContext(null)

export const GithubProvider = ({ children }) => {
  // get access token
  const signInToGithub = useSignInToGithub()

  // Oktokit REST API
  const octokit = useOktokit({
    githubAccessToken: signInToGithub.accessToken,
  })

  return (
    <GithubContext.Provider
      value={{
        signInToGithub,
        octokit,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

const useGithub = () => useContext(GithubContext)

export default useGithub
