import React, { useContext } from 'react';
import Select from '../Select';
import CommandButton from '../CommandButton';
import { Context as TextEditorContext } from '../../context/TextEditorContext';
import './styles.css';

const ControlPanel = () => {
  const { state: { controlPanelMode, synonyms, selectedText, selectedSynonym }, setCommandMode, setSelectedSynonym } = useContext(TextEditorContext);

  return (
    <div id="control-panel">
      <div id="format-actions">
        <CommandButton
          cmd="bold"
          className={`format-action${controlPanelMode.bold ? ' format-action-active' : ''}`}
          type="button"
          onClick={setCommandMode}
        >
          <b>B</b>
        </CommandButton>
        <CommandButton
          cmd="italic"
          className={`format-action${controlPanelMode.italic ? ' format-action-active' : ''}`}
          type="button"
          onClick={setCommandMode}
        >
          <i>I</i>
        </CommandButton>
        <CommandButton
          cmd="underline"
          className={`format-action${controlPanelMode.underline ? ' format-action-active' : ''}`}
          type="button"
          onClick={setCommandMode}
        >
          <u>U</u>
        </CommandButton>
      </div>
      <div>
        {selectedText ? <span>Latest selection: <strong>{selectedText}</strong></span> : null}
      </div>
      <div id="select-synonyms">
        <Select
          options={synonyms}
          onChange={setSelectedSynonym}
          value={selectedSynonym}
          disabled={selectedText === ''}
        />
      </div>      
    </div>
  );
}

export default ControlPanel;
