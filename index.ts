import mongoose from "mongoose";
import Server from "./classes/server";
import defaultRoutes from "./routes/default.routes";
import equipoRoutes from "./routes/equipo.routes";
import bodyParser from "body-parser";

const server = new Server();

server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended:true}))

server.app.use('/',defaultRoutes);
server.app.use('/equipos', equipoRoutes);


mongoose.connect('mongodb+srv://user_personajes:equipos2022@cluster0.4okejvu.mongodb.net/cupQatar',(error)=>{
    if(error){
        throw error;
    }
    console.log('base de datos online')
});

server.Start(()=>{
    console.log(`Servidor corriendo en puerto ${server.port} `)
})