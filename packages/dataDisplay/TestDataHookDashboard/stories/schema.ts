import joi from '../../../data/joi'

export default joi.object({
  total: joi.number(),
  launches: joi.array(),
  offset: joi.number(),
  count: joi.number(),
})

export const schemaFail = joi.object({
  total: joi.string(),
  launches: joi.array(),
  offset: joi.string(),
  count: joi.string(),
})
