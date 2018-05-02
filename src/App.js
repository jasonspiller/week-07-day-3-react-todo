import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
import TodosContainer from './containers/TodosContainer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
				<Header />
				<Switch>
					<Route exact path='/' component={ Home }/>
					<Route path='/todos' component={ TodosContainer }/>
				</Switch>
      </div>
    );
  }
}

export default App;
