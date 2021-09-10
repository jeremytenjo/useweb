export default function getSocialNameFromUrl(url) {
  let name = url.split('.com')[0].split('/').pop().replace('www.', '')

  if (new URL(url).host === 'youtu.be' || new URL(url).host === 'm.youtube.com') {
    name = 'youtube'
  }

  return { name }
}
