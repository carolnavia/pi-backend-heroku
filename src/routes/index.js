const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getCountriesAll, getId } = require("../controllers/countries");
const { postActivity, getActivity } = require("../controllers/activities");

const router = Router();

router.get("/countries", getCountriesAll);
router.get("/countries/:id", getId);
router.get("/activity", getActivity);
router.post("/activity", postActivity);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/* router.get('/', (req, res) =>{
	    res.send('Testing')
	}) */

module.exports = router;
