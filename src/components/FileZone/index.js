import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';
import './styles.css';

class FileZone extends Component {
  render() {
    return (
      <div id="file-zone">
        <ContentEditable
          id="file"
          html='<div>Prueba</div>'
        />
      </div>
    );
  }
}

export default FileZone;
