import task from '../../../devtools/utils/task/task.js'

import enquireDep from './handlers/enquireDep/enquireDep.js'
import updatePackagesWithDep from './handlers/updatePackagesWithDep/updatePackagesWithDep.js'

// updates dependency and deploys a package with a selected dependency
export default async function updateDepAndPublish() {
  const depToUpdate = await enquireDep()

  await task({
    fn: async () => await updatePackagesWithDep({ depToUpdate }),
    title: `Publishing packages with ${depToUpdate.packageName}`,
  })
}
