import React from 'react';
import {Main} from './router'
import {Routes,Route } from 'react-router-dom';
import '../css/maincss.css'


function App() {
  return (
  <div>
    <Routes>
      <Route exact path='/' element={<Main />}/>
    </Routes>
  </div>
  );
}

export default App;
