require("dotenv").config();
var Sequelize = require("sequelize");
const { Activity, Country } = require("../db");
const { Op } = require("sequelize");
//const { getCountriesDb } = require("./index.js");

const postActivity = async (req, res) => {
  const { name, difficulty, season, duration, country } = req.body;
  if (!name || !difficulty || !season || !duration) {
    res.status(404).send("Debes ingresar todas las propiedades");
  } else {
    let newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    country.forEach(async (countries) => {
      const countrydb = await Country.findOne({
        where: { name: countries },
      });

      await newActivity.addCountry(countrydb);
    });
    return res.status(200).send("Actividad creada con Exito");
  }
};

const getActivity = async (req, res) => {
  // const { name, all } = req.query;
  // if (all) {
  const activity = await Activity.findAll({
    include: Country,
  });
  return activity ? res.json(activity) : res.sendStatus(400);
  // } else {
  //   const actTour = await Activity.findAll({
  //     where: {
  //       name: { [Op.iLike]: `%${name}%` },
  //     },
  //     include: Country,
  //   });
  //   return actTour ? res.json(actTour) : res.sendStatus(400);
  // }
};

module.exports = { postActivity, getActivity };
