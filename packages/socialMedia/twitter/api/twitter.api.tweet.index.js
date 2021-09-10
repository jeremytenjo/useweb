import initTwitterApi from './twitter.api'

export default ({ tweet, twitterApiConfig }) => {
  const twitterApi = initTwitterApi({ twitterApiConfig })

  twitterApi.post('statuses/update', { status: tweet }, (err) => {
    if (err) console.log(`Error: ${err}`)
    else console.log(`Tweet successfully sent`)
  })
}
