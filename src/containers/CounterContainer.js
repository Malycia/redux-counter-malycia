import { connect } from 'react-redux';

import Counter from '~/components/Counter';

const mapStateToProps = (state, ownProps) => ({
  nbVoteTotal: state.oui + state.non,
});


// connect : usine à composant React de type container
const CounterContainer = connect(mapStateToProps)(Counter);

export default CounterContainer;
