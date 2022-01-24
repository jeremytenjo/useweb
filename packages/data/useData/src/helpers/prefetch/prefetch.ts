import { mutate } from 'swr'

import formatKey from '../../utils/formatKey'

type PrefetchProps = { id: string; fn: any; shouldRevalidate?: boolean }

/**
 * [Docs](https://swr.vercel.app/docs/prefetching#programmatically-prefetch)
 */
export default function prefetch({ id, fn, shouldRevalidate }: PrefetchProps) {
  mutate(formatKey(id), fn, shouldRevalidate)
}
