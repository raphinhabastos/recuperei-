app.get( async (req, resp) => {
    try {
        let users = await db.tb_lista_negra.findAll({
            where: {
                id_nome : req.params.id
            } 
        }
        )

        resp.send(users)
        
    } catch (e) {
        resp.send({erro: e.toString()})
    }
});

app.post(async (req, resp) => {

    let login = req.body;

    let p = await db.tb_lista_negra.findOne({
        where: {
            id_nome : req.params.id
        }
    })

    resp.sendStatus(200);
});