import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());


app.get('/listar',async (req, resp) => {
    try {
        let users = await db.tb_lista_negra.findAll()
            
        resp.send(users)
        
    } catch (e) {
        resp.send({erro: e.toString()})
    }
});

app.post('/inserir',async (req, resp) => {

    let adicionar = req.body;

    let p = await db.tb_lista_negra.findAll()

    let inserir = { 
        id_nome : req.params.id_nome
    }

    resp.sendStatus(200);
});

app.listen(process.env.PORT,
    x => console.log('Server up at port ' + process.env.PORT))
