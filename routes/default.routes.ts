import { Router } from "express";

const defaultRoutes = Router();

defaultRoutes.get('/',(req:Request,res:Response)=>{
    return res.json({
        ok:true,
        msj:'Todo funciona correctamente bien'
    })
});

export default defaultRoutes;