import githubEncodeContents from '../githubEncodeContents'

import getGithubContents from './handlers/getGithubContents'
/**
 * {@link https://docs.github.com/en/rest/reference/repos#get-repository-content|Docs}
 */
export default async function getGithubFiles({ owner, repo, path }) {
  try {
    const filesInGithubFolder = await getGithubContents({ owner, repo, path })

    const filesWithContent = await Promise.all(
      filesInGithubFolder.data.map(async (item) => {
        const { data: fileData } = await getGithubContents({
          owner,
          repo,
          path: item.path,
        })

        if (item.type === 'file') {
          item.fileContent = githubEncodeContents(fileData.content, fileData.encoding)
        }
        item.id = item.sha

        return item
      }),
    )

    // console.log(filesWithContent)
    return filesWithContent
  } catch (error) {
    console.log(error)
  }
}
