import { Router } from 'express';
import * as PostsController from '../../../controllers/v1/posts.controllers';

const api = Router();

api.get('/',PostsController.getAllPosts);
api.get('/:id',PostsController.getByIdPosts);
api.post('/',PostsController.createOnePosts);
api.patch('/:id',PostsController.updateOnePosts);
api.delete('/:id',PostsController.deleteOnebyID);

export default api;