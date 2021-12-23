export const shareIsSupported = navigator.share

export type Props = {
  title: string
  text: string
  url: string
}

export default async function shareFunction(data: Props) {
  if (!shareIsSupported)
    return { error: 'Fail: Web Share is not supported in this browser' }

  try {
    await navigator.share(data)
    return { success: true }
  } catch (error) {
    return {
      error: `Fail: Sorry there was an issue with webshare ${error}`,
    }
  }
}
