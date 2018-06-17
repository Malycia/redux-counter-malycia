import { connect } from 'react-redux';

import Button from '~/components/Button';

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
const ButtonContainer = connect(
  mapStateToProps, // lecture du state => on génère des props pour Button
  mapDispatchToProps, // écriture dans le state => on génère des props pour Button
)(Button);

export default ButtonContainer;
