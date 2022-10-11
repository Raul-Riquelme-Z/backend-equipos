"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipo = void 0;
const mongoose_1 = require("mongoose");
const equipoSchema = new mongoose_1.Schema({
    nombreEquipo: {
        type: String,
        require: [true, 'Ingresa nombre del equipo']
    },
    grupo: {
        type: String,
        require: [true, 'Ingresa un nombre de grupo']
    },
    entrenador: {
        type: String,
        require: [true, 'Ingresa el nombre del entrenador']
    },
    imagen: {
        type: String,
        require: [true, 'inserta una imagen']
    }
});
exports.Equipo = (0, mongoose_1.model)('Equipo', equipoSchema);
