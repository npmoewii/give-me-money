import { Router } from "express";
import UserController from './controllers/user.controller'

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to User Service" });
});

router.get('/all', UserController.getUser)

router.post('/isVerifyKey', UserController.isKeyValid)


export default router;