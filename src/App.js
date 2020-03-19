import React from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColor';
import { generatePalette } from './colorHelper';

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[2])} />
    </div>
  );
}

export default App;
