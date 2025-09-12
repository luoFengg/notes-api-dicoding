const { ImageHeadersSchema } = require("./schema");
const InvariantError = require("../../exceptions/InvariantError");

const UploadsValidator = {
  validateImageHeaders: (headers) => {
    const validattionResult = ImageHeadersSchema.validate(headers);

    if (validattionResult.error) {
      throw new InvariantError(validattionResult.error.message);
    }
  },
};

module.exports = UploadsValidator;
