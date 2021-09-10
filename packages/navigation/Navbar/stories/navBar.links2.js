import IconFilmMaterial from '../../../dataDisplay/Icon/library/IconFilmMaterial'
import IconTvMaterial from '../../../dataDisplay/Icon/library/IconTvMaterial'

export default [
  {
    label: { text: 'MOVIES' },
    Icon: IconFilmMaterial,
    url: 'movies',
  },
  {
    top: true,
    search: true,
    iconStyles: {
      color: 'white',
      backgroundColor: 'primary',
      boxShadow: '0px 4px 12px rgba(36, 195, 169, 0.5)',
    },
  },
  {
    label: { text: 'TV' },
    Icon: IconTvMaterial,
    url: 'schedule',
  },
]
