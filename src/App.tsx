import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Props {}

interface State {
  count: number;
};

class App extends React.Component<Props, State> {
  state: State = {
    count: 1
  };

  render(){
    const welcome: string = 'Hello world';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { welcome }
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  };
}

export default App;
