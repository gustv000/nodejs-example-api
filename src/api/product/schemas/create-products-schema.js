const Ajv = require('ajv')
const ajv = Ajv()

const schema = {
  properties: {
    products: {
      type: 'array',
      items: {
        properties: {
          name: { type: 'string' }
        }
      },
      minItems: 1
    }
  },
  required: ['products'],
  additionalProperties: false
}

module.exports = (data) => {
  const validate = ajv.compile(schema)
  const valid = validate(data)

  if (valid === false) {
    return validate.errors
  }

  return null
}
