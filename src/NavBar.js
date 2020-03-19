import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SnackBar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex', open: false };
    this.handleChange = this.handleChange.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }

  handleChange(evt) {
    this.setState({ format: evt.target.value, open: true });
    this.props.handleChangeFormat(evt.target.value);
  }

  closeSnackBar() {
    this.setState({ open: false });
  }
  render() {
    return (
      <header className='Navbar'>
        <div className='logo'>
          <NavLink to='/'>React Color Picker</NavLink>
          {/* <a href='#'>React Color Picker</a> */}
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
                boxShadow: 'none',
                marginTop: '-3px'
              }}
              railStyle={{ height: '8px' }}
            />
          </div>
        </div>
        <div className='select-container'>
          <Select value={this.state.format} onChange={this.handleChange}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <SnackBar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          autoHideDuration={3000}
          open={this.state.open}
          message={`Format Changed: ${this.state.format.toUpperCase()}!`}
          action={[
            <IconButton onClick={this.closeSnackBar} style={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          ]}
          onClose={() => this.setState({ open: false })}
        ></SnackBar>
      </header>
    );
  }
}

export default NavBar;
