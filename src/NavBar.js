import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';

class NavBar extends Component {
  state = {};
  render() {
    return (
      <header className='Navbar'>
        <div className='logo'>
          <a href='#'>React Color Picker</a>
        </div>

        <div className='slider-container'>
          <span>Level: {this.props.level}</span>
          <div className='slider'>
            <Slider
              defaultValue={this.props.level}
              min={100}
              max={900}
              step={100}
              onAfterChange={this.props.handleChange}
              trackStyle={{ background: 'transparent' }}
              handleStyle={{
                background: 'white',
                outline: 'none',
                border: '2px solid slategrey',
                'box-shadow': 'none',
                'margin-top': '-3px'
              }}
              railStyle={{ height: '8px' }}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
