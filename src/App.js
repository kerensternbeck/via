import React from 'react';
import './App.scss';
import Header from './header/header';
import Main from './main/main';
import DriverStore from './store/driverStore.js';

function App() {
  const store = new DriverStore();
  return (
    <React.Fragment>
      <div className="header">
        <Header store={store} />
      </div>
      <div className="main">
        <Main store={store} />
      </div>
    </React.Fragment>
  );
}

export default App;
