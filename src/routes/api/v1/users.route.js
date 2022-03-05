import { Router } from 'express';
import * as cController from '../../controllers/Users.controller';

const api = Router();

api.get('/:id/posts', Users.findAll);
api.get('/:id/profile', Users.findOne);
api.put('/:id/profile', Users.updateOne);
api.delete('/:id', Users.deleteOne);

export default api;
