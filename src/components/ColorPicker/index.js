import React, { Component } from 'react';

class ColourWheel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false
    };

    this.options = {
      width: this.props.width || 200,
      height: this.props.width || 200,
      img: this.props.img || './images/c-wheel.png'
    };
  }

  componentDidMount() {
    this.addImageInCanvas();
  }

  render() {
    return (
      <canvas
        onMouseDown={() => this.setState({ dragging: true })}
        onMouseMove={e => this.selectColor(e)}
        onMouseUp={() => this.setState({ dragging: false })}
        style={{ cursor: "crosshair", borderRadius: "100%" }}
        ref="canvas"
        width={this.options.width}
        height={this.options.height}
      />
    );
  }

  addImageInCanvas() {
    let { canvas } = this.refs;
    this.ctx = canvas.getContext("2d");
    let img = new Image();
    img.src = require(`${this.options.img}`);
    img.onload = () =>
      this.ctx.drawImage(img, 0, 0, this.options.width, this.options.height);
  }

  selectColor(e) {
    if (!this.state.dragging) return;
    let { offsetX, offsetY } = e.nativeEvent;
    let { data } = this.ctx.getImageData(offsetX, offsetY, 1, 1);
    let color = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
    return this.props.callback(color);
  }
}

export default ColourWheel;
