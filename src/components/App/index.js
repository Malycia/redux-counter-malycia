import React from 'react';

import Counter from '~/components/Counter';
import ButtonContainer from '~/containers/ButtonContainer';
import './app.styl';

const App = () => (
  <div className="app">
    <p>Aimez-vous Redux ?</p>
    <Counter />
    <ButtonContainer name="oui" />
    <ButtonContainer name="non" />
  </div>
);
test

export default App;
