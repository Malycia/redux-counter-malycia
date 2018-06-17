import React from 'react';

import store from '~/store';

class Counter extends React.Component {
  // On veut gérer ici la connexion au state global (de l'application)
  // Le composant Counter est intéressé par *certaines* parties du state.
  // const state = store.getState();
  state = {} // état local

  componentDidMount() {
    // Dès le départ, on commence à écouter les futures/potentielles
    // modifications du state global.
    store.subscribe(this.syncState);
    // En plus, au démarrage, on synchronise les states.
    this.syncState();
  }

  syncState = () => {
    const globalState = store.getState(); // on récupère l'état global (de l'application)
    // On stocke dans l'état local (du composant) l'information qui nous intéresse
    this.setState({ // Ça déclenche un render
      nbVoteTotal: globalState.oui + globalState.non,
    });
  }

  render() {
    const { nbVoteTotal } = this.state;
    return (
      <div className="app-counter">
        {nbVoteTotal}
      </div>
    );
  }
}

export default Counter;
