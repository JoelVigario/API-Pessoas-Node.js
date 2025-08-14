import { consulta } from "../database/index.js";

class PessoaRepository {

    findAll() {
        const sql = "SELECT * FROM pessoa"
        return consulta(sql, '', "Não foi possível localizar!")
    }

    findById() {}

    create() {}

    update() {}

    delete() {}

}

export default new PessoaRepository()