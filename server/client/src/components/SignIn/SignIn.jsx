import React, { useState } from 'react';
import styles from './SignIn.module.css';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
	const [values, setValues] = useState({ email: '', password: '' });
	const [errors, setErrors] = useState({ error: '' });
	const history = useHistory();

	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const { data } = await axios.post(
				'http://localhost:4000/users/signin',
				values
			);
			console.log(data);
			localStorage.setItem('user', JSON.stringify(data[0]));
			history.push('/dashboard');
		} catch (error) {
			const { data } = error.response;
			setErrors({
				error: data.error,
			});
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.signin}>
				{errors.error && <p className={styles.error}>{errors.error}</p>}
				<h1 className={styles.signin__title}>Sign In</h1>
				<form
					className={styles.forms}
					action='submit'
					onSubmit={handleSubmit}
					noValidate>
					<div>
						<label htmlFor='email'>
							<input
								type='email'
								id='email'
								name='email'
								placeholder='Email'
								onChange={handleChange}
								value={values.email}
							/>
						</label>
					</div>
					<div>
						<label htmlFor='password'>
							<input
								type='password'
								id='password'
								name='password'
								placeholder='Password'
								onChange={handleChange}
								value={values.password}
							/>
						</label>
					</div>
					<div className={styles.form__buttons}>
						<Button
							onClick={() => history.push('/signup')}
							variant='outlined'
							color='default'>
							Sign up
						</Button>
						<Button variant='outlined' color='primary' type='submit'>
							Sign In
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignIn;
