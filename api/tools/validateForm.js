const { Type, Pokemon } = require("../src/db");
const { Op } = require("sequelize");

const validateForm = async (req, res, next) => {
  const { name, health, image, attack, defense, type } = req.body;

  const existPokemon = await Pokemon.findOne({
    where: { name: { [Op.iLike]: name } },
  });

  if (!name) {
    return res.status(400).json({
      error: " El nombre debe almenos tener una letra o ser de tipo String",
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
      .json({ error: "health debe tener almenos un dijito" });
  if (!image)
    return res.status(400).json({ error: "Debes almenos subir una imagen" });
  const isUrlValid =
    /^(https?:\/\/)?(www\.)?[a-z0-9\-\.\/_]+\.(png|jpg|jpeg)$/i.test(image);
  if (!isUrlValid) {
    return res.status(400).json({
      error:
        "El enlace proporcionado no es válido o no apunta a una imagen PNG o JPG",
    });
  }

  if (!attack || typeof attack !== "number")
    return res
      .status(400)
      .json({ error: "el ataque debe tener almenos un dijito" });
  if (!defense || typeof defense !== "number")
    return res
      .status(400)
      .json({ error: "la defensa debe tener almenos un dijito" });
  if (type.length === 0 || !Array.isArray(type) || type.length > 2)
    return res.status(400).json({ error: "Debe tener almenos un tipo" });

  for (let i = 0; i < type.length; i++) {
    const validator = await Type.findOne({ where: { name: type[i] } });

    if (!validator) {
      return res.status(400).json({ error: "El tipo de pokemon no existe" });
    }
  }

  next();
};

module.exports = {
  validateForm,
};
