import React, { useContext, useRef } from 'react';
import { Context as TextEditorContext } from '../../context/TextEditorContext';
import ControlPanel from '../ControlPanel';
import FileZone from '../FileZone';
import { checkForWord, getUserSelection } from '../../utils';
import datamuse from '../../api/datamuse';
import './styles.css';

const TextEditor = () => {
  const { state: { controlPanelMode, selectedText }, setCommandMode, setSelectedText, setSynonyms } = useContext(TextEditorContext);
  const userSelection = useRef(getUserSelection());

  const getSynonym = async word => {
    try {
        const { data } = await datamuse.get(undefined, { params: { rel_syn: word } });
        const synonyms = data.map(({ word }) => word);
        setSynonyms(synonyms);
    } catch (error) {
        alert(`Something went wrong fetching synonyms for word: ${word}`, error);
    }
}

  const checkSelection = () => {
    const currentSelectedText = userSelection.current.toString();
    if (checkForWord(currentSelectedText) && (currentSelectedText !== selectedText)) {
      setSelectedText(currentSelectedText);
      getSynonym(currentSelectedText);
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
