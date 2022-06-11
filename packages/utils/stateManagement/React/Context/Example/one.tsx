import React from 'react'

import useUploads from './Data/uploads.state'

export default () => {
  const { uploadsCreate, uploadRead, uploadsUpdate, uploadsDelete } = useUploads()

  const createItem = () =>
    uploadsCreate({ data: { id: 2, name: 'person 2', country: 'colombia' } })
  const readItem = () => uploadRead({ id: 2 })
  const updateItem = () =>
    uploadsUpdate({
      id: 2,
      toUpdate: { name: 'person 200', country: 'canada' },
    })
  const deleteItem = () => uploadsDelete({ id: 2 })

  return (
    <>
      <button onClick={createItem}>Create</button>
      <button onClick={readItem}>Read</button>
      <button onClick={updateItem}>Update</button>
      <button onClick={deleteItem}>Delete</button>
    </>
  )
}
