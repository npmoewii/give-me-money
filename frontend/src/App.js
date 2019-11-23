import React from 'react';
import './App.css';

import UserForm from './components/UserForm'
import DebtForm from './components/DebtForm'
import Transaction from './components/TransactionForm'
import DebtList from './components/DebtList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null
    }
  }

  updateGlobalState = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value
    }, () => console.log('Update global', this.state))
  }

  render() {
    return (
      <div className="App">
        <UserForm updateGlobalState={this.updateGlobalState} />
        <DebtForm />
        <Transaction />
        <DebtList username={this.state.username} />
      </div>
    )

  }
}

export default App;
