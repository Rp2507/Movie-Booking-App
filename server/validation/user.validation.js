const Joi = require("joi");

const user = {
  body: Joi.object().keys({
    name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    // profile: Joi.required()
  }),
};

module.exports = { user };
