import React, { Component } from 'react';
import { Provider as TextEditorProvider } from './context/TextEditorContext';
import ControlPanel from './components/ControlPanel';
import FileZone from "./components/FileZone";
import getMockText from './text.service';
import './App.css';

class App extends Component {
  getText() {
    getMockText().then(function (result) {
      console.log(result);
    });
  }

  render() {
    return (
      <TextEditorProvider>
        <div className="App">
          <header>
            <span>Simple Text Editor</span>
          </header>
          <main>
            <ControlPanel />
            <FileZone />
          </main>
        </div>
      </TextEditorProvider>
    );
  }
}

export default App;
