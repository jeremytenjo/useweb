import B from '../../../../storybook/variationBlock/index'
import mockArrayComponents from '../../../../utils/array/functions/mockArrayComponents/index'
import Box from '../../../Box'
import Poster from '..'

const image = 'https://images-na.ssl-images-amazon.com/images/I/818NtgncwLL._SL1500_.jpg'

export default () => {
  return (
    <div>
      <B title='default'>
        <Poster src={image} onClick={() => console.log('sdf')} />
      </B>
      <B title='label'>
        <Poster src={image} label='Not Released' />
      </B>
      <B title='lastAiredEpisode'>
        <Poster src={image} lastAiredEpisode={{ season: 3, episode: 22 }} />
      </B>
      <B title='no photo'>
        <Poster
          alt='this is a poster jfhajklsdhf ljk ahslk lkashd f fjklahsljk fjljaksh dfjklhasjkld fhljkas hdfjklhasjk fhkjas hdfjklhasdfjklhaskj fhljkas fhlkjashdf jkas j fhjkasdhfjklashldfjkhasjkl lkjasd fjklas sdhfjklahsfkjasdhf lkjashdfkjhasljdkfhaks  h aklsdf fhklajshfd'
          onClick={() => console.log('sdf')}
        />
      </B>
      <B title='loading'>
        <Poster loading alt='this is a poster' onClick={() => console.log('sdf')} />
      </B>
      <B title='no animations'>
        <Poster
          noAnimation
          src={image}
          alt='this is a poster'
          onClick={() => console.log('sdf')}
        />
      </B>
      <B title='in grid: use size auto' contentStyle={{ background: 'lightblue' }}>
        <Box
          styles={{
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: 'xs',
            padding: 's',
            width: 'calc(100vw - 100px)',
          }}
        >
          {mockArrayComponents(
            <Poster src={image} alt='this is a poster' size='auto' />,
            3,
          )}
          <Poster
            alt='this is a poster jfhajklsdhf ljk ahslk lkashd f fjklahsljk fjljaksh dfjklhasjkld fhljkas hdfjklhasjk fhkjas hdfjklhasdfjklhaskj fhljkas fhlkjashdf jkas j fhjkasdhfjklashldfjkhasjkl lkjasd fjklas sdhfjklahsfkjasdhf lkjashdfkjhasljdkfhaks  h aklsdf fhklajshfd'
            size='auto'
          />
          <Poster src={image} alt='this is a poster' size='auto' />
        </Box>
      </B>
    </div>
  )
}
