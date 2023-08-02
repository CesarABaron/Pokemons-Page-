const { Type } = require("../src/db");
const { DataTypes } = require("sequelize");

const validateForm = async (req, res, next) => {
  const { name, health, image, attack, defense, type } = req.body;

  if (!name || typeof name !== "string")
    return res.status(400).json({
      error: " El nombre debe almenos tener una letra o ser de tipo String",
    });

  if (!health || typeof health !== "number")
    return res
      .status(400)
      .json({ error: "health debe tener almenos un dijito" });
  if (!image)
    return res
      .status(400)
      .json({ error: "imagen Debe almenos tener una letra" });
  if (!attack || typeof attack !== "number")
    return res
      .status(400)
      .json({ error: "el ataque debe tener almenos un dijito" });
  if (!defense || typeof defense !== "number")
    return res
      .status(400)
      .json({ error: "la defensa debe tener almenos un dijito" });
  if (type.length === 0 || !Array.isArray(type))
    return res.status(400).json({ error: "Debe tener almenos un tipo" });

  for (let i = 0; i < type.length; i++) {
    const validator = await Type.findOne({ where: { name: type[i] } });

    if (!validator) {
      return res.status(400).json({ error: "Debe tener almenos un tipo" });
    }
  }

  next();
};

module.exports = {
  validateForm,
};
