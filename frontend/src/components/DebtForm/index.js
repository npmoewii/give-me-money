import React from 'react';
import { Form, Input, Button, message as Message } from 'antd';
import UserSelect from '../UserSelect';

import DebtService from '../../models/Debt.service'

class DebtForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username_creditor: '',
      username_debtor: '',
      cost: '',
    };
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async () => {
    const { name, username_creditor, username_debtor, cost } = this.state
    const message = await DebtService.create(username_creditor, username_debtor, name, cost)
    Message.info(message)
  }

  render() {
    return (
      <div>
        <Form layout="inline">
          <Form.Item label="Debt Name">
            <Input name="name" onChange={this.handleChange} />
          </Form.Item>
          <Form.Item label="Creditor">
            <UserSelect name='username_creditor' onChange={this.handleChange} />
          </Form.Item>
          <Form.Item label="Debtor">
            <UserSelect name='username_debtor' onChange={this.handleChange} />
          </Form.Item>
          <Form.Item label="Cost">
            <Input name="cost" onChange={this.handleChange} type='number' />
          </Form.Item>
          <Form.Item>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default DebtForm;
