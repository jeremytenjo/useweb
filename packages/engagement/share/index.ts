export const shareIsSupported = navigator.share

export type Props = {
  title: string
  text: string
  url: string
}
const shareFunction = async (data: Props) => {
  if (!shareIsSupported)
    return { error: 'Fail: Web Share is not supported in this browser' }
  const { title, text, url } = data
  const dataIsValid = title && text && url

  if (!dataIsValid)
    return {
      error: 'Fail: Data has to be object {title, text, url} all strings',
    }

  try {
    await navigator.share(data)
    return { success: true }
  } catch (error) {
    return {
      error: `Fail: Sorry there was an issue with webshare please open big-web-features : ${error}`,
    }
  }
}

export default shareFunction
