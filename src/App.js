import React from 'react';
import './App.css';
import './css/styles.css'
import Button from './containers/Button'
import ChannelArea from './components/ChannelArea'
import UsefulData from './containers/UsefulData'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      	<ChannelArea />
	<Button title="app"/>
	<UsefulData />
      </header>
    </div>
  );
}

export default App;
