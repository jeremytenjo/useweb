import useFirebaseFunction from '../../../../utils/cloud/functions/firebase/useFirebaseFunction'
import TestDataHookDashboard from '../../../../dataDisplay/TestDataHookDashboard'

export function AddEntryFromUrl() {
  const url =
    'https://www.vox.com/2020/12/23/22197066/trump-pardons-russia-investigation-republicans-george-papadopoulos-duncan-hunter-chris-collins'
  const fun = useFirebaseFunction('crawlingGetData', { data: { url } })

  return <TestDataHookDashboard dataHook={fun} />
}
