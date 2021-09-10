export default function getTweetIdFromUrl(url) {
  const tweetId = url.split('/')[5].split('?')[0] || url.split('/').pop()

  return tweetId
}
