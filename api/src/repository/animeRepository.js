import { con } from "../connection.js";

export async function inserirAnime(anime){
    const comando = 

    `INSERT INTO tb_anime (id_anime, nm_anime)
    VALUES ( ? , ? )`

    const [resposta] = await con.query(comando,[anime.nome]);
    anime.id = resposta.insertId;

    return anime;

}

    export async function listatodosanimes (){
        const comando =
        `SELECT id_anime        id,
        nm_filme                nome
        FROM tb_anime;`


        const [ linhas ] = await con.query(comando);
        return linhas;
    }