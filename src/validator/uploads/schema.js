const Joi = require("joi");

const ImageHeadersSchema = Joi.object({
  "content-type": Joi.string()
    .valid(
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "image/avif",
      "image/apng"
    )
    .required(),
}).unknown(true);

module.exports = { ImageHeadersSchema };
