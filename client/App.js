import React from 'react'
import ReactDOM from 'react-dom';

//--- Components ---//
import CanvasContainer from './Canvas';
import FormContainer from './Form';

const App = () => {
  return (
    <div id="app-container">
      <FormContainer/>
      <CanvasContainer/>
    </div>
  )
}

export default App