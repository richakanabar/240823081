const Joi = require("joi");

exports.createValidator = Joi.object({

  name: Joi.string().min(3).max(15).required(),

  city: Joi.string().min(3).max(50).required(),

});

exports.updateValidator = Joi.object({

  name: Joi.string().min(3).max(15).optional(),

  city: Joi.string().min(3).max(50).optional(),

});

exports.validate = (schema, data) => {

  const { error, value } = schema.validate(data, { abortEarly: false });

  if (error) {

    return {

      success: false,

      error: error.details.map((err) => ({

        field: err.path[0],

        message: err.message,

      })),

    };

  }

  return { success: true, value };

};

