import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: 'hex' };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(value) {
    this.setState({ format: value });
  }

  render() {
    const { level } = this.state;
    const { palette } = this.props;
    const colorBoxes = palette.colors[level].map(color => (
      <ColorBox
        background={color[this.state.format]}
        name={color.name}
        key={color.id}
      />
    ));
    return (
      <div className='Palette'>
        <NavBar
          handleChange={this.changeLevel}
          handleChangeFormat={this.changeFormat}
          level={level}
        />
        <div className='Palette-colors'>{colorBoxes}</div>
        <footer className='Palette-footer'>
          {palette.paletteName} <span className='emoji'>{palette.emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
