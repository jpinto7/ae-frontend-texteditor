import React from 'react';
import { Provider as TextEditorProvider } from './context/TextEditorContext';
import TextEditor from './components/TextEditor';

const App = () => (
  <TextEditorProvider>
    <TextEditor />
  </TextEditorProvider>
);

export default App;
