import React from 'react';
import Authenticate from '../hoc/Authenticate';

class Home extends React.Component {

  UNSAFE_componentWillMount () {
    console.log('In Home');
  }
  render() {
    return (
      <div>
        <header>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default Authenticate(Home);
