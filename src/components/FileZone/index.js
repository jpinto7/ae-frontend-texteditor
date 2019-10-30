import React, { useEffect, useContext } from 'react';
import ContentEditable from 'react-contenteditable';
import { Context as TextEditorContext } from '../../context/TextEditorContext';
import getMockText from '../../text.service';
import './styles.css';

const FileZone = () => {
  const { state: { editorText }, updateEditorText} = useContext(TextEditorContext);

  const handleOnChange = event => {
    updateEditorText(event.target.value);
  };

  useEffect(() => {
    getMockText().then(function (result) {
      updateEditorText(result);
    });
  }, []);

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
