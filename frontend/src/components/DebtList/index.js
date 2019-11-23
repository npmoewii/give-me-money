import React from 'react';
import { Table } from 'antd';

import DebtService from '../../models/Debt.service'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const mockData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

class DebtList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      debtList: mockData,
      username: this.props.username
    };
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  fetchDebtList = async () => {
    const debtList = await DebtService.getList(this.state.username)
    this.setState({
      debtList
    })
  }

  render() {
    const { debtList } = this.state
    return <Table columns={columns} dataSource={debtList} />;
  }
}

export default DebtList