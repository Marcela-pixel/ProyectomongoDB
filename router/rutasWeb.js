const express = require('express');
const router = express.Router();

/* enrutamiento */
router.get('/', (req, res) => {
        res.render("index", {titulo: "Marcela Moreno"});
    })
    
router.get('/servicios', (req, res) => {
        res.render("servicios", {tituloServicio: "Servicios Mascotas"});
    })
    
module.exports = router;