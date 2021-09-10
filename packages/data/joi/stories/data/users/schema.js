import validator from '../../..'

export default validator.object({
  name: validator.string().min(3).max(30).required(),
  email: validator
    .string()
    .email({ tlds: { allow: ['com', 'net'] } })
    .required(),
  teamId: validator.string(),
  leagueId: validator.string(),
  position: validator.string().required(),
  avatar: validator.string(),
})
