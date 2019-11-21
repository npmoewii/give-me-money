import React from 'react'
import { Form, Input, Button } from 'antd'

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'username': ''
    }
  }

  handleSubmit = () => {
    this.props.updateGlobalState('username', this.state.username)
    console.log(this.state)
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Form layout="inline">
        <Form.Item label="Username">
          <Input name='username' onChange={this.handleChange} />
        </Form.Item>
        <Form.Item>
          <Button onClick={this.handleSubmit}>Update</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default UserForm