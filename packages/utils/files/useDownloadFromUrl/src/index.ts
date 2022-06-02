import JsFileDownloader from 'js-file-downloader'
import useAsync, { type UseAsyncReturn } from '@useweb/use-async'

type UseDownloadFromUrlProps = {
  url: string
}

export default function useDownloadFromUrl(
  { url }: UseDownloadFromUrlProps = { url: undefined as any },
): UseAsyncReturn {
  const dfu = useAsync({
    fn: async ({ url: dynamicUrl }) => downloadFromUrl({ url: dynamicUrl || url }),
  })

  return dfu
}

export async function downloadFromUrl({ url }) {
  try {
    const res = await new JsFileDownloader({
      url,
    })
    return res
  } catch (error) {
    return { error }
  }
}
