const { Type, Pokemon } = require("../src/db");
const { Op } = require("sequelize");

const validateForm = async (req, res, next) => {
  const { name, health, image, attack, defense, type } = req.body;

  const existPokemon = await Pokemon.findOne({
    where: { name: { [Op.iLike]: name } },
  });

  if (!name) {
    return res.status(400).json({
      error: " The name must have at least one letter or be of type String",
    });
  } else if (typeof name !== "string") {
    return res.status(400).json({
      error: "The name provided must be a string",
    });
  } else if (existPokemon) {
    return res.status(400).json({
      error: "The name allready exists",
    });
  }

  if (!health || typeof health !== "number")
    return res
      .status(400)
      .json({ error: "health must have at least one digit" });
  if (!image)
    return res.status(400).json({ error: "You must at least upload a link" });
  const isUrlValid =
    /^(https?:\/\/)?(www\.)?[a-z0-9\-\.\/_]+\.(png|jpg|jpeg)$/i.test(image);
  if (!isUrlValid) {
    return res.status(400).json({
      error:
        "The provided link is invalid or does not point to a PNG or JPG image",
    });
  }

  if (!attack || typeof attack !== "number")
    return res
      .status(400)
      .json({ error: "the attack must have at least one digit" });
  if (!defense || typeof defense !== "number")
    return res
      .status(400)
      .json({ error: "the defense must have at least one digit" });
  if (type.length === 0 || !Array.isArray(type) || type.length > 2)
    return res.status(400).json({ error: "Must have at least one type" });

  for (let i = 0; i < type.length; i++) {
    const validator = await Type.findOne({ where: { name: type[i] } });

    if (!validator) {
      return res
        .status(400)
        .json({ error: "The type of pokemon does not exist" });
    }
  }

  next();
};

module.exports = {
  validateForm,
};
