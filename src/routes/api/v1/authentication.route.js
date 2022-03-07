import { Router } from 'express';
import * as AuthenticationController from '../../controllers/v1/authentication.controller';

const api = Router();

api.post('/login', AuthenticationController.login);
api.post('/register', AuthenticationController.register);

export default api;
