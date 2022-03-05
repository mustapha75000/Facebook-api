import jwt from 'jsonwebtoken';
import * as UserModel from '../models/user.model';
import { HttpException, HttpStatus } from '../errors/HttpException.error';

export const login = async (request, response) => {
  const user = await UserModel.findByCredentials(request.body);
  if (!user) {
    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }

  const token = jwt.sign({ id: user.id }, 'SECRET');
  response.json({
    data: {
      token,
      user,
    },
  });
}

export const register = (request, response) => {
    var email = request.body.email;
    var password = request.body.password;

    if (email == null || password == null) {
        return response.status(400).json({'erreur': 'parametres manquant'})
    }

}
