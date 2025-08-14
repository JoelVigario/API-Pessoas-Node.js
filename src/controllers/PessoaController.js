import PessoaRepository from "../repositories/PessoaRepository.js";

class PessoaController {

    async index(req, res) {
        const row = await PessoaRepository.findAll()
        res.json(row)
    }

    show() {}

    store() {}

    update() {}

    delete() {}

}

export default new PessoaController()