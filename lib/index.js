const Joi = require("joi")

const singleOption = Joi.object({
  servers: Joi.object(),
  user: Joi.strict(),
  password: Joi.string(),
  pool: Joi.bool(),
  cursor: Joi.bool(),
  db: Joi.string()
})
const optionsSchema = Joi.array()
  .items(singleOption)
  .min(1)
  .single()

exports.plugin = {
  async register(server, pluginOptions) {
    const options = await optionsSchema.validate(pluginOptions)

    const conn = require("rethinkdbdash")(...options)
    server.decorate("server", "rethink", conn)
    server.decorate("request", "rethink", conn)
  },

  pkg: require("../package.json")
}
