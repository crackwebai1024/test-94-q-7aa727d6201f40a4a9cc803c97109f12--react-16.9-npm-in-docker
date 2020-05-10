import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Container/Container'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
          <Container />
      </div>
    );
  }
}

export default App;
