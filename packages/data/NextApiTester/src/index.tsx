import React from 'react'
import { type RequestProps } from '@useweb/use-fetch'
import FetchTester from '@useweb/fetch-tester'

export type NextApiTesterProps = { name: string; payload?: RequestProps; port?: number }

export default function NextApiTester({
  name,
  payload,
  port = 3000,
}: NextApiTesterProps) {
  const url = `http://localhost:${port}/api/${name}`

  return <FetchTester url={url} payload={payload} />
}
