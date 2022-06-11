import useFirebaseFunction from '../../../../serverless/firebase/functions/useFirebaseFunction/src'
import TestDataHookDashboard from '../../../../dataDisplay/TestDataHookDashboard'

export default {}
export function AddEntryFromUrl() {
  const url =
    'https://www.vox.com/2020/12/23/22197066/trump-pardons-russia-investigation-republicans-george-papadopoulos-duncan-hunter-chris-collins'
  const fun = useFirebaseFunction({
    name: 'crawlingGetData',
    fetchOptions: {
      body: url,
    },
  })

  return <TestDataHookDashboard dataHook={fun} />
}
