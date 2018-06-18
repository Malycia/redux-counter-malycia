import React from 'react';

import store from '~/store';

const Counter = ({ nbVoteTotal }) => {
    (
      <div className="app-counter">
        {nbVoteTotal}
      </div>
    );
}

export default Counter;
