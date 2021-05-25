var express = require('express');
var router = express.Router();
var produit_ctl = require('../Controllers/produit_controller');

router.get('/', produit_ctl.getAll);
router.get('/:id', produit_ctl.getByID);
router.get('/type/:id', produit_ctl.getByType);
router.post('/create', produit_ctl.createProduit);
router.delete('/:id', produit_ctl.deleteProduit);
router.put('/:id', produit_ctl.updateProduit);


module.exports = router;