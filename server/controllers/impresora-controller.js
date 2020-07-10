const impresora_model = require('../models/impresora-model');
const _ = require('underscore');
const Impresora_Controler = {};



Impresora_Controler.getimpresora = async(req, res) => {
    await impresora_model.find({}, (err, impresora) => {
        if (err) {
            res.status(400).json({
                status: "BAD",
                err
            });
        }
        impresora.contador = undefined;
        res.json({
            status: "OK",
            impresora
        });
    });
};



Impresora_Controler.insertImpresora = async(req, res) => {
    let body = req.body;
    let new_impresora = new impresora_model(body);
    await new_impresora.save((err, impresora) => {
        if (err) {
            res.status(400).json({
                status: false,
                err
            });
        }
        impresora.contador = undefined;
        res.json({
            status: true,
            impresora
        });
    });
}

Impresora_Controler.updateImpresora = async(req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['modelo', 'color', 'ip', 'precio']);
    let impresora = await impresora_model.findById(id, (err, impresora) => {
        if (err) {
            return res.status(400).json({
                status: false,
                error: "id no valido"
            });
        }
    });
    await impresora_model.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' },
        (err, impresora) => {
            if (err) {
                res.status(400).json({
                    status: false,
                    err
                });
            }
            impresora.contador = undefined;
            res.json({
                status: true,
                impresora
            });
        }
    )
};

Impresora_Controler.deleteImpresora = (req, res) => {
    res.json("recivido");
};




module.exports = Impresora_Controler;