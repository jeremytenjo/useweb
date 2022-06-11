import React, { createContext, useState } from 'react'

import _uploadsRead from '../../Actions/Read/context.read.index'
import _uploadsUpdate from '../../Actions/Update/context.update.index'
import _uploadsCreate from '../../Actions/Create/context.create.index'
import _uploadsDelete from '../../Actions/Delete/context.delete.index'

export const UploadsContext = createContext(false)
export const UploadsProvider = ({ children }) => {
  // State
  const [uploads, setUploads] = useState([{ id: 1, name: 'person 1' }])
  const [creating, setCreating] = useState(false)
  const [reading, setReading] = useState(false)
  const [updating, setUpdating] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [initialFetchUploads, setinitialFetchUploads] = useState(false)
  const [lastVisibleDoc] = useState('')
  const [hasFetchedAll] = useState(false)

  // Functions
  const initialFetch = () => {
    // Required function on all data states, ensures fb is not called multiple times
    if (!initialFetchUploads) {
      uploadsRead()
      setinitialFetchUploads(true)
    }
  }

  // Create
  const uploadsCreate = async ({ data, location }) => {
    setCreating(true)
    setUploads(
      await _uploadsCreate({
        state: uploads,
        data,
        location,
      }),
    )
    setCreating(false)
    setCreating(false)
  }

  // Read
  const uploadsRead = async ({ id } = { id: false }) => {
    setReading(true)
    const initialUploads = !initialFetchUploads ? [] : uploads
    setUploads(
      await _uploadsRead({
        state: initialUploads,
        id,
      }),
    )
    setReading(false)
  }

  // Update
  const uploadsUpdate = async ({ id, toUpdate }) => {
    setUpdating(true)
    setUploads(
      await _uploadsUpdate({
        state: uploads,
        id,
        toUpdate,
      }),
    )
    setUpdating(false)
  }

  // Delete
  const uploadsDelete = async ({ id }) => {
    setDeleting(true)
    setUploads(
      await _uploadsDelete({
        state: uploads,
        id,
      }),
    )
    setDeleting(false)
  }

  return (
    <UploadsContext.Provider
      value={{
        uploads,
        uploadsCreate,
        uploadsRead,
        uploadsUpdate,
        uploadsDelete,
        initialFetch,
        creating,
        reading,
        updating,
        deleting,
        lastVisibleDoc,
        hasFetchedAll,
      }}
    >
      {children}
    </UploadsContext.Provider>
  )
}

export default () => useContext(UploadsContext)
