import React, { SyntheticEvent } from 'react';
import Logo from './components/Logo';
import LinkRef from './components/LinkRef';
import './App.css';
import BpiResponse from './interfaces/Bpi';

interface Props {};

interface State {
  count: number;
  message: string;
};

class App extends React.Component<Props, State> {
  state: State = {
    count: 1,
    message: 'Hello world'
  };

  componentDidMount(){
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json())
        .then((response: BpiResponse) => {
              console.log('response', response);
        });
  }

  handleClick = (e: SyntheticEvent) => {
    this.setState({count: this.state.count + 1});
  }

  render(){
    const { count, message } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <p>{ message }</p>
          
          <LinkRef link="https://reactjs.org" target="_blank" className="App-link">
              Learn React !!
          </LinkRef>

          <div className="mb-20">
            <p>El contador es: {count}</p>
          </div>

          <div className="mb-20">
            <button type="button" onClick={ this.handleClick }>
              Incrementar contador
            </button>
          </div>
        </header>
      </div>
    );
  };
}

export default App;