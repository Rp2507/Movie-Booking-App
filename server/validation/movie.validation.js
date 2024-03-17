const Joi = require("joi");

const movie = {
  body: Joi.object().keys({
    title: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    realeaseDate: Joi.date().required(),
    posterUrl: Joi.string().required().trim(),
    featured: Joi.boolean().required(),
    actors: Joi.string().required().trim(),
  }),
};

module.exports = { movie };
