const { Router } = require('express');
const Impresora_ctr = require('../controllers/impresora-controller');
const Impresora_Controler = require('../controllers/impresora-controller');

const router = Router();

// consultar impresoras
router.get('/', Impresora_ctr.getimpresora);

// insertar impresoras
router.post('/', Impresora_Controler.insertImpresora);

// actualizar impresora
router.put('/:id', Impresora_Controler.updateImpresora);

// Eliminar una Impresora


module.exports = router;