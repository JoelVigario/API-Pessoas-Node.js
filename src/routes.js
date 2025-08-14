import { Router } from "express";
import PessoaController from "./controllers/PessoaController.js";

const routes = new Router()

routes.get('/pessoas', PessoaController.index)

export default routes