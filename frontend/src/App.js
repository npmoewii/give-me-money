import React from 'react';
import './App.css';

import UserForm from './components/UserForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'username': ''
    }
  }

  updateGlobalState = (key, value) => {
    this.setState({
      ...this.state,
      key: value
    })
  }

  render() {
    return (
      <div className="App">
        
        <UserForm updateGlobalState={this.updateGlobalState} />
      </div>
    )

  }
}

export default App;
