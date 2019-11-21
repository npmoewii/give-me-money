import conn from '../database'

class User {
  async getAll() {
    let users = null;
    try {
      const [rows] = await conn.execute('SELECT * FROM `user`')
      users = []
      rows.forEach(row => {
        console.log(row)
        users.push({
          'username': row['username'],
          'display_name': row['display_name']
        })
      })
    } catch (e) {
      console.error(e)
    } finally {
      return users
    }
  }

  async findUser(username) {
    let user = null
    try {
      const [rows] = await conn.execute("SELECT * FROM `user` WHERE `username`=?", [username])
      user = rows[0]
    } catch (e) {
      console.error(e)
    } finally {
      return user
    }
  }

  async isValidKey(username, key) {
    let isValid = false
    try {
      const user = await this.findUser(username)
      if (user) {
        isValid = user['key'] === key
      }
    } catch (e) {
      console.error(e)
    } finally {
      return isValid
    }
  }
  
}

const UserModel = new User()
export default UserModel