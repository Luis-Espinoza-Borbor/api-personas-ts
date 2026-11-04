import { Router } from 'express';
import * as controller from '../controllers/persona.controller';
import { validarApiKey } from '../middlewares/global.middlewares';

const router = Router();

router.get('/', controller.obtenerTodos);
router.get('/:id', controller.obtenerPorId);
router.post('/', controller.crear);
router.put('/:id', controller.actualizar);
router.delete('/:id', controller.eliminar);

export default router;