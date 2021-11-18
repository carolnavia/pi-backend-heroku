require("dotenv").config();

var Sequelize = require("sequelize");
const { Activity, Country } = require("../db");
//const { bulkCreateCountry } = require("./index.js");
const { Op } = require("sequelize");

const getCountriesAll = async (req, res) => {
  //hago la ruta /countries y la del name
  const { name } = req.query;
  if (name) {
    const countryName = await Country.findAll({
      attributes: ["flag", "name", "continent", "population", "id"],
      incluide: Activity,

      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    countryName.length > 0
      ? res.status(200).send(countryName)
      : res.status(404).send("Los paises no fueron encontrados");
  } else {
    let allCountries = await Country.findAll({
      attributes: ["flag", "name", "continent", "population", "id"],
      order: [["name", "ASC"]],
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: {
          attributes: [],
        },
      },
    });
    res.status(200).send(allCountries);
  }
};

const getId = async (req, res) => {
  const { id } = req.params;
  let detail = id.toUpperCase();
  const country = await Country.findByPk(detail, { include: Activity });
  country ? res.json(country) : res.sendStatus(404);
};

// const getPopulation = async (req, res) => {
//   //const {population} = req.body;
//   const poblacion = await Country.findAll({ attributes: ["population"] });
//   res.status(200).send(poblacion);
// };

module.exports = { getCountriesAll, getId };
