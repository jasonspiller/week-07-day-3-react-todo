import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';


class Header extends Component {
  render() {
    return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">React Todos</h1>
				<nav>
					<Link to={'/'}>Home</Link> | <Link to={'/todos'}>Todos</Link>
				</nav>
			</header>
    );
  }
}

export default Header;
