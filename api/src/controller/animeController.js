
import { Router }  from "express";
import { inserirAnime, listadosanimes } from "../repository/animeRepository.js";
const server = Router ();

server.post ('/anime',async (req, resp) => {
    try{
        const anime = req.body;

        const resposta = await inserirAnime(anime);

        resp.send(resposta);
    }

    catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }

})

server.get ('/anime', async (req,resp) => {
    try{
        const resposta = await listatodosanimes();
        resp.send(resposta);
    }

    catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }

})

export default server;