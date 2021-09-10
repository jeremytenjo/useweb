import faker from '../../../../faker'
import generateStubs from '../../../stubs/generate'

import schema from './schema'

const stub = () => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  teamId: faker.datatype.uuid(),
  leagueId: faker.datatype.uuid(),
  position: 'ST',
  avatar: faker.image.image(),
})

export default generateStubs(schema, stub)
