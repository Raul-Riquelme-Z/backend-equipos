"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipo_model_1 = require("../models/equipo.model");
const equipoRoutes = (0, express_1.Router)();
equipoRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const equipos = yield equipo_model_1.Equipo.find();
    return res.json({
        ok: true,
        equipos
    });
}));
equipoRoutes.get('/paging', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let perPage = 5;
    let page = Number(req.query.page) || 1;
    let skip = page - 1;
    skip = skip * perPage;
    const equipos = yield equipo_model_1.Equipo.find().skip(skip).limit(perPage);
    return res.json({
        ok: true,
        equipos
    });
}));
equipoRoutes.post('/', (req, res) => {
    const body = req.body;
    const equipo = {
        nombreEquipo: body.nombreEquipo,
        grupo: body.grupo,
        entrenado: body.entrenador,
        imagen: body.imagen
    };
    equipo_model_1.Equipo.create(equipo).then(equipoDb => {
        return res.json({
            ok: true,
            equipoDb
        });
    }).catch(err => {
        return res.json({
            ok: false,
            err
        });
    });
});
equipoRoutes.put('/:id', (req, res) => {
    const equipoId = req.params.id;
    const body = req.body;
    const equipo = {
        nombreEquipo: body.nombreEquipo,
        grupo: body.grupo,
        entrenado: body.entrenador,
        imagen: body.imagen
    };
    equipo_model_1.Equipo.findByIdAndUpdate(equipoId, equipo).then(equipoDb => {
        return res.json({
            ok: true,
            equipoDb
        });
    });
});
equipoRoutes.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const equipoId = req.query.id;
    if (!equipoId) {
        return res.json({
            ok: false,
            msj: "el registro no existe"
        });
    }
    /*const equipoDb = await Equipo.findById(equipoId);

    if(!equipoDb){
        return res.json({
            ok:false,
            msj:"el registro no existe"
        })
    }*/
    equipo_model_1.Equipo.findByIdAndDelete(equipoId).then(equipo => {
        return res.json({
            ok: true,
            msj: "Eliminado correctamente"
        });
    }).catch(err => {
        return res.json({
            ok: false,
            msj: "el registro no existe"
        });
    });
}));
exports.default = equipoRoutes;
