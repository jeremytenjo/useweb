import getSocialMediaNameFromUrl from '../getSocialMediaNameFromUrl'

export default {
  title: 'lib/socialMedia/utils/getSocialMediaNameFromUrl',
  argTypes: {
    url: {
      defaultValue: 'https://www.youtube.com/watch?v=uANXG6qI7rE&ab_channel=ZFHFootball',
      control: {
        type: 'select',
        options: [
          'https://www.youtube.com/watch?v=uANXG6qI7rE&ab_channel=ZFHFootball',
          'https://twitter.com/AOC/status/1357796544028753920',
          'https://youtu.be/crZK0N_Boqs',
          'https://nosocialmedia.com/AOC/status/1357796544028753920',
        ],
      },
    },
  },
}

const Template = (args) => <>{getSocialMediaNameFromUrl(args.url)}</>

export const Example = Template.bind({})
