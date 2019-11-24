import React from 'react';
import { Table } from 'antd';

import DebtService from '../../models/Debt.service'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Creditor',
    dataIndex: 'creditor',
    key: 'creditor',
    render: creditor => <>{creditor['display_name'] || ''}</>,
  },
  {
    title: 'Debtor',
    dataIndex: 'debtor',
    key: 'debtor',
    render: debtor => <>{debtor['display_name'] || ''}</>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Cost',
    dataIndex: 'cost',
    key: 'cost'
  }, {
    title: 'Created time',
    dataIndex: 'time',
    key: 'time'
  }
];

class DebtList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      debtList: [],
    };
  }

  componentDidMount() {
    this.fetchInterval = setInterval(
      () => this.fetchDebtList(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.fetchInterval);
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  fetchDebtList = async () => {
    if (this.props.username) {
      const debtList = await DebtService.getList(this.props.username)
      console.log(debtList)
      this.setState({
        debtList
      })
    }
  }

  render() {
    const { debtList } = this.state
    return (
      <div>
        <h2>Related debt list</h2>
        <Table columns={columns} dataSource={debtList} />
      </div>
    )
  }
}

export default DebtList