import React from 'react';
import { Form, Input, Button } from 'antd';
import UserSelect from '../UserSelect';

class DebtForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

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
            <Input name="cost" onChange={this.handleChange} />
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
