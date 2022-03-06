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

export const register = async (request, response) => {
  const { email, password } = request.body;
  const user = await UserModel.createOne({ email, password });

  response.status(201).json({ user });
}
