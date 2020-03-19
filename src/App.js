import React, { Component } from 'react';
import './App.css';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColor';
import { generatePalette } from './colorHelper';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }
  findPalette(id) {
    return seedColors.filter(palette => palette.id === id)[0];
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path='/'
            render={routeProps => (
              <PaletteList palettes={seedColors}></PaletteList>
            )}
          ></Route>
          <Route
            exact
            path='/palette/:id'
            render={routeProps => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
