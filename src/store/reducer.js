const initialState = {
  oui: 5,
  non: 2,
};

const reducer = (currentState = initialState, action = {}) => {
  switch (action.type) {
    case 'VOTE':
      console.log('je vote', currentState);
      return {
        ...currentState,
        [action.name]: currentState[action.name] + 1,
      };
    default: return currentState;
  }
};

export default reducer;
