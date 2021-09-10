export default async (schema, schemaExmaple, amount = 100) => {
  try {
    await schema.validateAsync(schemaExmaple())
    const data = []
    let i
    for (i = 0; i < amount; i++) {
      data.push(schemaExmaple())
    }

    return data
  } catch (error) {
    throw `users stub error: ${error}`
  }
}
