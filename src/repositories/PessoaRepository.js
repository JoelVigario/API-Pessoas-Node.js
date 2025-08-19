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

    update(pessoa, id) {
        const sql = "UPDATE pessoa SET ? WHERE id = ?"
        return consulta(sql, [pessoa, id], "Não foi possível atualizar!")
    }

    delete(id) {
        const sql = "DELETE FROM pessoa WHERE id = ?"
        return consulta(sql, id, "Não foi possível apagar!")
    }

}

export default new PessoaRepository()