import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fs from "fs";

class App extends Component <any,any>{

  constructor(props:any) {
    super(props);
    this.state = {files: []}
}

public componentDidMount() {
    fs.readdir('/', (err:any, files:any) => {
        this.setState({files: files});
    });
}

  public renderFiles(){
    return <ul>
      {this.state.files.map((file:any, index:any) => {
            return (<li key={index}>{file}</li>);
        })}
    </ul>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          
            Learn React
          </a>

          {this.renderFiles()}
        </header>
      </div>
    );
  }
}

export default App;
