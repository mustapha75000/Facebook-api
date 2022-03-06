import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const findByCredentials = ({ email, password }) =>
  prisma.user.findFirst({
    where: {
      email,
      password,
    },
  });

export const findById = ({ id }) =>
  prisma.user.findUnique({
    where: { id },
  });

export const createOne = async ({ content, title }) =>
  prisma.posts.create({
    data: {
      content,
      title,
    },
  });
