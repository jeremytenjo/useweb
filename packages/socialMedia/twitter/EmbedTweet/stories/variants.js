import { B, V } from '../../../../storybook/ui'

const Variants = ({ Component: EmbedTweet }) => {
  return (
    <>
      <B title='id'>
        <EmbedTweet id='1334905644785283079' />
      </B>

      <B title='url'>
        <EmbedTweet url='https://twitter.com/cenkuygur/status/1357378249546887169' />
      </B>

      <B title='url with =?'>
        <EmbedTweet url='https://twitter.com/ajplus/status/1351598045998305283?s=19' />
      </B>
    </>
  )
}

export default ({ onlyBase }) =>
  V({
    dir: 'socialMedia/twitter/EmbedTweet',
    Variants,
    onlyBase,
  })
