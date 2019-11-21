import { UserRepository } from '../models/repository';
import { Context } from 'koa'

class UserController {
  getUser = async (ctx: Context) => {
    allUser = UserRepository.getUser()
  }
}

export default UserController;