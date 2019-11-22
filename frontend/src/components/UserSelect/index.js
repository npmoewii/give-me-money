import React from 'react'
import { Select } from 'antd'
import User from '../../models/User.service'

class UserSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': []
    }
  }

  async componentDidMount() {
    const users = await User.getUser()
    this.setState({
      ...this.state,
      'users': users
    })
  }

  onChange = (value) => {
    console.log(value)
    // value => username
    const tmp = {
      target: {
        name: this.props.name,
        value
      }
    }
    this.props.onChange && this.props.onChange(tmp)
  }

  render() {
    return (
      <Select
        placeholder={this.props.placeholder || 'Select user...'}
        showSearch
        style={{ width: 200 }} 
      >
        {this.state.users.map(user => (
          <Select.Option 
            key={user.username} 
            value={user.username}
          >
            {user.display_name}
          </Select.Option>
        ))}
      </Select>
    )
  }
}

export default UserSelect