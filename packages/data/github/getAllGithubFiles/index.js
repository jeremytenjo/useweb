import getGithubFiles from '../getGithubFiles'

/**
 * Get all files and folders from a github folder
 * @example
 * await getAllGithubFiles({      
      owner: 'jeremytenjo',
      repo: 'tenjo-apps',
      githubFolderUrl: 'lib/src/dataDisplay/Avatar',
    })
 */
export default async function getAllGithubFiles({ githubFolderUrl, owner, repo }) {
  const files =
    (await getGithubFiles({
      owner,
      repo,
      path: githubFolderUrl,
    })) || []

  const foldersData = await getFoldersFiles({ files, owner, repo })

  const rootFiles = files.filter((file) => file.type === 'file')
  const allFiles = [...foldersData, ...rootFiles]

  return allFiles
}

async function getFoldersFiles({ files = [], owner, repo }) {
  const data = []

  await Promise.all(
    files.map(async (file) => {
      const isFolder = file.type === 'dir'

      if (isFolder) {
        const folder = file
        const innerFiles = await getGithubFiles({
          owner,
          repo,
          path: file.path,
        })
        folder.files = innerFiles
        folder.type = 'directory'
        folder.id = folder.sha

        data.push(folder)

        await getFoldersFiles({ files: innerFiles, owner, repo })
      }
    }),
  )

  return data
}
