const rethinkdbdash = require("rethinkdbdash")

exports.plugin = {
  async register(server, pluginOptions) {
    const rethink = rethinkdbdash({ ...pluginOptions })
    server.decorate("server", "rethink", rethink)
    server.decorate("request", "rethink", rethink)
    server.expose("rethink", rethink)
  },

  pkg: require("../package.json")
}
