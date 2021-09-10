export default function getVideoIdFromUrl(youtubeUrl) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = youtubeUrl.match(regExp)
  const videoId = match && match[7].length === 11 ? match[7] : false

  return videoId
}
