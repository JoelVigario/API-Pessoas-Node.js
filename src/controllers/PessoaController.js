import PessoaRepository from "../repositories/PessoaRepository.js";

class PessoaController {

    async index(req, res) {
        const row = await PessoaRepository.findAll()
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await PessoaRepository.findById(id)
        res.json(row[0])
    }

    async store(req, res) {
        const pessoa = req.body
        const row = await PessoaRepository.create(pessoa)
        res.json(row)
    }

    update() {}

    delete() {}

}

export default new PessoaController()