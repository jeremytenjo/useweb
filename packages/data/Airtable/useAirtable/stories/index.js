import useAirtable from '../index'
import TestDataHookDashboard from '../../../../dataDisplay/TestDataHookDashboard/index'

const projectId = 'appNRsEx9kiYMQxrI'
const tableId = 'Links'

export function ListRecords() {
  const getAirTable = useAirtable(projectId, tableId, {
    method: 'getPage',
    data: {
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: 'Grid view',
    },
  })

  return <TestDataHookDashboard dataHook={getAirTable} />
}

export function RetrieveARecord() {
  const getAirTable = useAirtable(projectId, tableId, {
    method: 'find',
    data: 'rec6puGsfY7VaeNNd',
  })

  return <TestDataHookDashboard dataHook={getAirTable} />
}

export function CreateARecord() {
  const getAirTable = useAirtable(projectId, tableId, {
    method: 'create',
    data: [
      {
        fields: {
          Title:
            'Trump pardons corrupt members of Congress and allies caught in Russia investigation',
          Description:
            'Nine and a half months into 2020, this “year” has felt like a long, miserable, supremely fucked-up joke of a decade. But if you’re able to, try and th...',
          'Banner Image': [
            {
              url: 'https://cdn.vox-cdn.com/thumbor/aNog3pHW7Y_0lXtxsutMECfEGxo=/0x0:4784x2392/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/22193084/1230092714.jpg',
            },
          ],
          source:
            'https://www.vox.com/2020/12/23/22197066/trump-pardons-russia-investigation-republicans-george-papadopoulos-duncan-hunter-chris-collins',
          Category: 'corruption',
        },
      },
    ],
  })

  return <TestDataHookDashboard dataHook={getAirTable} />
}

// export function UpdateARecord() {
//   const getAirTable = useAirtable(projectId, tableId, {
//     method: 'update',
//     data: 'rec6puGsfY7VaeNNd',
//   })
// }

// export function DeleteRecord() {
//   const getAirTable = useAirtable(projectId, tableId, {
//     method: 'delete',
//     data: 'rec6puGsfY7VaeNNd',
//   })
// }
