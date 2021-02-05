const { request, response } = require("express");
const Heroe = require("../model/heroe");

const createHeroe = async (req = request, res = response) => {
  try {
    const body = req.body;

    const heroes = new Heroe(body);

    await heroes.save();
    res.json(heroes);
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Comunicarse con soporte tecnico",
    });
  }
};

const getHeroes = async (req = request, res = response) => {
  try {
    const heroes = await Heroe.find();

    res.json(heroes);
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Comunicarse con soporte tecnico",
    });
  }
};

const getHeroeById = async (req = request, res = response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.json({
        message: "No id",
      });
    }

    const heroe = await Heroe.findById(id);

    res.json(heroe);
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Comunicarse con soporte tecnico",
    });
  }
};

module.exports = {
  createHeroe,
  getHeroes,
  getHeroeById
};
