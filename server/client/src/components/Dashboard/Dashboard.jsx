import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Dashboard.module.css';
import Button from '@material-ui/core/Button';

function Dashboard() {
	const [user, setUser] = useState({});
	const history = useHistory();
	useEffect(() => {
		const fetchedUser = JSON.parse(localStorage.getItem('user'));
		setUser(fetchedUser);
	}, []);

	const handleLogout = () => {
		localStorage.removeItem('user');
		history.push('/');
	};
	return (
		<div className={styles.container}>
			<h4>Hello {`${user.firstName} ${user.lastName}`}</h4>
			<Button onClick={handleLogout} variant='contained' color='primary'>
				Logout
			</Button>
		</div>
	);
}

export default Dashboard;
