import { consulta } from "../database/index.js";

class PessoaRepository {

    findAll() {
        const sql = "SELECT * FROM pessoa"
        return consulta(sql, '', "Não foi possível localizar!")
    }

    findById(id) {
        const sql = "SELECT * FROM pessoa WHERE id = ?"
        return consulta(sql, id, "Não foi possível localizar!")
    }

    create(pessoa) {
        const sql = "INSERT INTO pessoa SET ?"
        return consulta(sql, pessoa, "Não foi possível cadastrar!")
    }

    update() {}

    delete() {}

}

export default new PessoaRepository()