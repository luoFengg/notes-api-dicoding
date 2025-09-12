const UploadsHandler = require("./handler");
const routes = require("./routes");

module.exports = {
  name: "uploads",
  version: "1.0.0",
  register: async (server, { servcie, validator }) => {
    const uploadsHandler = new UploadsHandler(servcie, validator);
    server.route(routes(uploadsHandler));
  },
};
