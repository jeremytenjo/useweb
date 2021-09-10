import useCloudFunction from '../../../../utils/cloud/functions/firebase/useCloudFunction'
import TestDataHookDashboard from '../../../../dataDisplay/TestDataHookDashboard'

export function AddEntryFromUrl() {
  const url =
    'https://www.vox.com/2020/12/23/22197066/trump-pardons-russia-investigation-republicans-george-papadopoulos-duncan-hunter-chris-collins'
  const fun = useCloudFunction('crawlingGetData', { data: { url } })

  return <TestDataHookDashboard dataHook={fun} />
}
