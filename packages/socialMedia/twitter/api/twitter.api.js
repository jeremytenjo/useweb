import twit from 'twit'

export default ({ twitterApiConfig }) => new twit(twitterApiConfig)
