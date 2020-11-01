import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import { Home, SignUp, SignIn, Dashboard } from './components';

function App() {
	return (
		<div className={styles.app}>
			<Router>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/signup' component={SignUp} />
					<Route path='/signin' component={SignIn} />
					<Route path='/dashboard' component={Dashboard} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
