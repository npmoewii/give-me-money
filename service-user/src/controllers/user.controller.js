import UserModel from '../models/user.model'

class UserController {
  static async getUser(req, res) {
    try {
      const users = await UserModel.getAll();
      console.log(users)
      return res.status(200).json(users);
    } catch (e) {
      console.error(e);
      res.status(500).json("Internal server error");
    }
  }

  static async isKeyValid(req, res) {
    try {
      const { username, key } = req.body
      const isValid = await UserModel.isValidKey(username, key)
      console.log('res ', isValid)
      return res.status(200).json(isValid)
    } catch (e) {
      console.error(e)
      res.status(500).json("Internal server error")
    }
  }
}

export default UserController