import { Router } from "express";
import authentication from './api/v1/authentication.route';
import users from './api/v1/users.route';
import posts from './api/v1/posts.route';

const router = Router()

router.use("/authentication", authentication);
router.use("/users", profile);
router.use("/posts", posts);

export default router;