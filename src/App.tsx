import React from 'react';
import Logo from './components/Logo';
import LinkRef from './components/LinkRef';
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
          <Logo />
          <p>
            { welcome }
          </p>
          

          <LinkRef 
            link="https://reactjs.org">
              Learn React !!
          </LinkRef>

        </header>
      </div>
    );
  };
}

export default App;
