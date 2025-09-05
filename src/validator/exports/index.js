const InvariantError = require("../../exceptions/InvariantError");
const ExportNotePayloadSchema = require("./schema");

const ExportsValidator = {
  validateExportNotePayload: (payload) => {
    const validationResult = ExportNotePayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = ExportsValidator;
