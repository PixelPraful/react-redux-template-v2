import React from 'react';
import { routes } from './AppRoutes';

class App extends React.Component {
  render() {
    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default App;
