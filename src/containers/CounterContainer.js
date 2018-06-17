import { connect } from 'react-redux';

import Counter from '~/components/Counter';

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.name,
  nbVote: state[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  vote: () => {
    dispatch({ type: 'VOTE', name: ownProps.name });
  },
});

// connect : usine à composant React de type container
const CounterContainer = connect(
  mapStateToProps, // lecture du state => on génère des props pour Button
  mapDispatchToProps, // écriture dans le state => on génère des props pour Button
)(Counter);

export default CounterContainer;
