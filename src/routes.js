import { Router } from "express";
import PessoaController from "./controllers/PessoaController.js";

const routes = new Router()

routes.get('/pessoas', PessoaController.index)
routes.get('/pessoas/:id', PessoaController.show)
routes.post('/pessoas/', PessoaController.store)
routes.put('/pessoas/:id', PessoaController.update)

export default routes