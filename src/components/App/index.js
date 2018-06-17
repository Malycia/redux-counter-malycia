import React from 'react';

import ButtonContainer from '~/containers/ButtonContainer';
import CounterContainer from '~/containers/CounterContainer';
import './app.styl';

const App = () => (
  <div className="app">
    <p>Aimez-vous Redux ?</p>
    <CounterContainer />
    <ButtonContainer name="oui" />
    <ButtonContainer name="non" />
  </div>
);

export default App;
