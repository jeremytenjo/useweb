import React from 'react'

import useData from '../src'

import Docs from './docs'

export default {
  title: 'Data/useData',
  args: {
    show: null,
  },
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: () => <Docs />,
    },
  },
}

const fetcher = async () => {
  const data = [
    {
      id: 1,
      name: 'jeremy',
    },
  ]

  return data
}

const creator: any = async ({ createdItem, latestData }) => {
  // make database call here
  console.log(createdItem, latestData)
  return {
    newItem: '',
    createdItem: '',
  }
}

const updater = async ({ updatedItem, latestData }) => {
  // make database call here
  console.log(updatedItem, latestData)
  return ''
}

const remover = ({ removedItem, latestData }) => {
  // make database call here
  console.log(removedItem, latestData)
  return { removedItem, latestData }
}

const useLatestMovies = () => {
  const latestMovies = useData({
    id: 'latestMovies',
    get: { fetcher },
    create: { creator },
    update: { updater },
    remove: { remover },
  })

  return latestMovies
}

const Template = () => {
  const latestMovies = useLatestMovies()

  return (
    <div>
      <div style={{ display: 'grid', gridGap: '10px', gridAutoFlow: 'column' }}>
        <button onClick={latestMovies.get.exec}>Get</button>
        <button
          onClick={() =>
            latestMovies.create.exec({ value: { id: Math.random(), name: 'Tenjo' } })
          }
        >
          Create
        </button>
        <button
          onClick={() =>
            latestMovies.update.exec({ id: 1, value: { name: 'New Jeremy' } })
          }
        >
          Update
        </button>
        <button onClick={() => latestMovies.remove.exec({ id: 1 })}>Remove</button>
      </div>

      <br />
      <p>Result:</p>
      <br />
      {latestMovies.get.data && <p>{JSON.stringify(latestMovies.get.data)}</p>}

      <br />
      <OtherComponent />
    </div>
  )
}

const OtherComponent = () => {
  const latestMovies = useLatestMovies()

  return (
    <div>
      <p>Other Component:</p>
      <br />
      {latestMovies.get.data && <p>{JSON.stringify(latestMovies.get.data)}</p>}
    </div>
  )
}

export const Example = Template.bind({})
