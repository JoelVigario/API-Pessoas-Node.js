import mysql from "mysql2"

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola'
})

conexao.connect()

/**
 * Executa um código sql com ou sem valores
 * @param {string} sql instrução sql
 * @param {string=id / [aluno, id]} valores a serem passados para o sql
 * @param {string} mensagemReject Mensagem de erro
 * @returns objecto da promise 
 */
export const consulta = (sql, valores, mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, result) => {
            if (erro) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default conexao