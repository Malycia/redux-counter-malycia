import { createStore } from 'redux';
import reducer from './reducer';

// On crée un store spécifique pour notre application,
// en le paramétrant avec notre reducer spécifique également.
const store = createStore(reducer);

export default store;
