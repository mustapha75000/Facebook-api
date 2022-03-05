import { launch } from './server';

const main = () => {
  const {
    PROTOCOL = 'http',
    HOST = 'localhost',
    PORT = 8080,
  } = process.env;

  launch({
    protocol: PROTOCOL,
    host: HOST,
    port: PORT,
  });
}

main();

/**
 * Blog |
 * 
 * models:
 *  User { id: number, firstname: string, lastname: string }
 *  Article { id: number, title: string, content: string }
 * 
 * URIs:
 *   Authenticate |
 *      POST /authenticate/login     Retrieve an Access Token
 *      POST /authenticate/register  Create an User
 *   User |
 *   Article |
 *      POST   /articles      Create an Article
 *      GET    /articles      Retrieve all Articles
 *      GET    /articles/{id} Find an Article by ID
 *      PUT    /articles/{id} Update an Article by ID
 *      DELETE /articles/{id} Delete an Article by ID
 */
