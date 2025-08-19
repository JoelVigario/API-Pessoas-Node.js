import { Router } from "express";
import PessoaController from "./controllers/PessoaController.js";

const routes = new Router()

routes.get('/pessoas', PessoaController.index)
routes.get('/pessoas/:id', PessoaController.show)

export default routes