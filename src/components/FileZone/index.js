import React, { useContext } from 'react';
import ContentEditable from 'react-contenteditable';
import { Context as TextEditorContext } from '../../context/TextEditorContext';
import './styles.css';

const FileZone = () => {
  const { state: { editorText }, updateEditorText} = useContext(TextEditorContext);

  const handleOnChange = event => {
    updateEditorText(event.target.value);
  };

  return (
    <div id="file-zone">
      <ContentEditable
        id="file"
        html={editorText}
        onChange={handleOnChange}
      />
    </div>    
  );
}

export default FileZone;
