import React from 'react'
import { Form, Input, Button, message as Message } from 'antd'
import UserSelect from '../UserSelect'

import TransactionService from '../../models/Transaction.service'

class TransactionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username_from: '',
      username_to: '',
      money: '',
      key: ''
    }
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async () => {
    const { username_from, username_to, money, key } = this.state
    const message = await TransactionService.create(username_to, username_from, money, key)
    Message.info(message)
  }

  render() {
    return (
      <Form layout="inline">
        <Form.Item label="From">
          <UserSelect name='username_from' onChange={this.handleChange} />
        </Form.Item>
        <Form.Item label="To">
          <UserSelect name='username_to' onChange={this.handleChange} />
        </Form.Item>
        <Form.Item label="Money">
          <Input name='money' onChange={this.handleChange} type='number' />
        </Form.Item>
        <Form.Item label="Creditor's Key">
          <Input name='key' type='password' onChange={this.handleChange} />
        </Form.Item>
        <Form.Item>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default TransactionForm