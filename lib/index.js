exports.plugin = {
  async register(server, pluginOptions) {
    const rethink = require("rethinkdbdash")({ ...pluginOptions })
    require("rethinkdbdash-timestampable")(rethink)
    server.decorate("server", "rethink", rethink)
    server.decorate("request", "rethink", rethink)
    server.expose("rethink", rethink)
  },

  pkg: require("../package.json")
}
