import React, { useContext } from 'react';
import CommandButton from '../CommandButton';
import { Context as TextEditorContext } from '../../context/TextEditorContext';
import './styles.css';

const ControlPanel = () => {
  const { state: { controlPanelMode }, setCommandMode } = useContext(TextEditorContext);

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
    </div>
  );
}

export default ControlPanel;
