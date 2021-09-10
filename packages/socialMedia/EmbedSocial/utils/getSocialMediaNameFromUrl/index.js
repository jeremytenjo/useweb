export default function getSocialMediaNameFromUrl(url) {
  const socialMedias = [
    {
      name: 'twitter',
      matches: ['twitter'],
    },
    {
      name: 'youtube',
      matches: ['youtube', 'youtu.be'],
    },
    {
      name: 'instagram',
      matches: ['instagram'],
    },
  ]
  const urlHost = new URL(url).host
  let socialMediaName = false

  socialMedias.forEach((sm) => {
    const isSocialMedia = sm.matches.map((s) => !!urlHost.includes(s)).includes(true)
    if (isSocialMedia) socialMediaName = sm.name
  })

  return socialMediaName
}
