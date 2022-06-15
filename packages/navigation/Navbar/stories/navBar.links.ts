import IconCameraMaterial from '../../../dataDisplay/Icon/library/IconCameraMaterial'
import IconPhoneMaterial from '../../../dataDisplay/Icon/library/IconPhoneMaterial'
import IconCalendarFeather from '../../../dataDisplay/Icon/library/IconCalendarFeather'

export default [
  {
    label: { text: 'Explore' },
    Icon: IconCameraMaterial,
    url: '/',
  },
  {
    label: { text: 'Schedule' },
    Icon: IconPhoneMaterial,
    url: 'schedule',
  },
  {
    Icon: IconCameraMaterial,
    file: true,
    top: true,
    iconStyles: {
      color: 'white',
      backgroundColor: 'primary',
      boxShadow: '0px 4px 12px rgba(36, 195, 169, 0.5)',
    },
  },
  {
    label: { text: 'Chat' },
    Icon: IconCalendarFeather,
    url: 'chat',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/estilistta.appspot.com/o/hayle.jpeg?alt=media&token=b8eb9208-6456-4075-9f57-c2c680745604',
    url: 'profile',
  },
]
