import React from 'react';
import PropTypes from 'prop-types'

const App = ({children}) => {
    return (
      <div className="background">
        {children}
      </div>
    );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
