import React, { useContext } from 'react';
import { CompactPicker } from 'react-color';
import Select from '../Select';
import CommandButton from '../CommandButton';
import { Context as TextEditorContext } from '../../context/TextEditorContext';
import './styles.css';

const ControlPanel = () => {
  const { state: { controlPanelMode, synonyms, editorTextColor, selectedText, selectedSynonym }, setCommandMode, setSelectedSynonym, setEditorTextColor } = useContext(TextEditorContext);

  const handleOnChangeColorPicker = ({ hex: color }) => {
    setEditorTextColor(color);
  };

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
      <CompactPicker
        color={editorTextColor}
        onChange={handleOnChangeColorPicker}
      />
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
