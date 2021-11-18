//const axios = require("axios");
//var Sequelize = require("sequelize");
const { Activity, Country } = require("../db");
const countries = require("../countries.json");

function countryItems(country) {
  return {
    name: country.name,
    id: country.alpha3Code,
    flag: country.flag,
    capital: country.capital,
    continent: country.region,
    subregion: country.subregion,
    area: country.area,
    population: country.population,
  };
}

// //lleno la db con todos los paises de la api
function bulkCreateCountry() {
  // return axios.get("https://restcountries.eu/v2/all").then((result) => {
  //   let response = result.data.map((el) => {
  //     return countryItems(el);
  //   });
  //   return Country.bulkCreate(response);
  // });
  let response = countries.map((el) => {
    return countryItems(el);
  });
  return Country.bulkCreate(response);
}

module.exports.bulkCreateCountry = bulkCreateCountry;
