import task from '../../../devtools/utils/task/task.js'

import enquireDep from './handlers/enquireDep/enquireDep.js'
import updatePackagesWithDep from './handlers/updatePackagesWithDep/updatePackagesWithDep.js'

export default async function updateDepAndPublish() {
  const depToUpdate = await enquireDep()

  await task({
    fn: async () => await updatePackagesWithDep({ depToUpdate }),
    title: `Publishing packages with ${depToUpdate.packageName}`,
  })
}
