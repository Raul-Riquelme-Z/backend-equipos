import { request, Request, response, Response, Router } from "express";
import { Equipo } from "../models/equipo.model";

const equipoRoutes = Router();

equipoRoutes.get('/',async (req:Request,res:Response)=>{

    const equipos = await Equipo.find();

    return res.json({
        ok:true,
        equipos
    })
})

equipoRoutes.get('/paging', async(req:Request,res:Response)=>{

        let perPage  = 5;
        let page = Number(req.query.page) || 1;
        let skip = page-1;
        skip = skip*perPage;

        const equipos = await Equipo.find().skip(skip).limit(perPage);

    return res.json({
        ok:true,
        equipos
    })
})

equipoRoutes.post('/',(req:Request,res:Response)=>{

    const body = req.body;

    const equipo = {
        nombreEquipo:body.nombreEquipo,
        grupo:body.grupo,
        entrenado:body.entrenador,
        imagen:body.imagen
    }

    Equipo.create(equipo).then(equipoDb =>{
        return res.json({
            ok:true,
            equipoDb
        })
    }).catch(err=>{
        return res.json({
            ok:false,
            err
        })
    })
})

equipoRoutes.put('/:id', (req:Request, res:Response)=>{

    const equipoId = req.params.id;
    const body = req.body;

    const equipo = {
        nombreEquipo:body.nombreEquipo,
        grupo:body.grupo,
        entrenado:body.entrenador,
        imagen:body.imagen
    }

    Equipo.findByIdAndUpdate(equipoId,equipo).then(equipoDb=>{

        return res.json({
            ok:true,
            equipoDb
        })
    })

    
})

equipoRoutes.delete('/', async(req:Request,res:Response)=>{

    const equipoId = req.query.id;

    if(!equipoId){
        return res.json({
            ok:false,
            msj:"el registro no existe"
        })
    }

    /*const equipoDb = await Equipo.findById(equipoId);

    if(!equipoDb){
        return res.json({
            ok:false,
            msj:"el registro no existe"
        })
    }*/

    Equipo.findByIdAndDelete(equipoId).then(equipo=>{
        return res.json({
            ok:true,
            msj:"Eliminado correctamente"
        })
    }).catch(err=>{
        return res.json({
            ok:false,
            msj:"el registro no existe"
        })
    })
    
})

export default equipoRoutes;