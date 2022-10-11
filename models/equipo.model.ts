import { model, Schema } from "mongoose";

const equipoSchema = new Schema({
    nombreEquipo:{
        type:String,
        require: [true, 'Ingresa nombre del equipo']
    },
    grupo:{
        type:String,
        require: [true, 'Ingresa un nombre de grupo']
    },
    entrenador:{
        type:String,
        require: [true, 'Ingresa el nombre del entrenador']
    },
    imagen:{
        type:String,
        require: [true, 'inserta una imagen']
    }

})

interface IEquipo extends Document{
    nombreEquipo:string;
    grupo:String;
    entrenador:String;
    imagen:string;
}

export const Equipo = model<IEquipo>('Equipo',equipoSchema);