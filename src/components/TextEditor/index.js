import React, { useContext, useEffect } from 'react';
import { Context as TextEditorContext } from '../../context/TextEditorContext';
import ControlPanel from '../ControlPanel';
import FileZone from '../FileZone';
import { checkForWord } from '../../utils';
import './styles.css';

const TextEditor = () => {
  const { state: { controlPanelMode, selectedText }, setCommandMode, setSelectedText } = useContext(TextEditorContext);
  let userSelection;

  useEffect(() => {
    if (window.getSelection) {
      userSelection = window.getSelection();
    }
    else if (document.selection) {
      userSelection = document.selection.createRange();
    }
  });

  const checkSelection = () => {
    const currentSelectedText = userSelection.toString();
    if (checkForWord(currentSelectedText) && (currentSelectedText !== selectedText)) {
      setSelectedText(currentSelectedText);
    }
  };

  const performCheck = () => {
    checkSelection();
    if (document.queryCommandState) {
      const currentControlPanelMode = {
        bold: document.queryCommandState('bold'),
        italic: document.queryCommandState('italic'),
        underline: document.queryCommandState('underline')
      };
      if (controlPanelMode.bold !== currentControlPanelMode.bold || controlPanelMode.italic !== currentControlPanelMode.italic || controlPanelMode.underline !== currentControlPanelMode.underline) {
        setCommandMode(currentControlPanelMode);
      }
    }  
  };

  return (
    <div className="App" onMouseUp={performCheck}>
      <header>
        <span>Simple Text Editor</span>
      </header>
      <main>
        <ControlPanel />
        <FileZone />
      </main>
    </div>
  );
}

export default TextEditor;
