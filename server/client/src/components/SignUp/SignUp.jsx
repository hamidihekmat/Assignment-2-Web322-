import React, { useState } from 'react';
import styles from './SignUp.module.css';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import useForm from '../../customHooks/useForm';
import validate from '../../helpers/validation';
import axios from 'axios';

function SignUp() {
	const [submitted, setSubmitted] = useState(false);
	const [count] = useState(3);
	const { values, errors, handleChange, handleSubmit } = useForm(
		submit,
		validate
	);

	const history = useHistory();
	const handleClick = () => {
		history.push('/signin');
	};
	function submit() {
		setSubmitted(true);
		axios
			.post('http://localhost:4000/users/register', values)
			.then((savedUser) => console.log(savedUser))
			.catch((err) => console.log(err));
		// Testing purposes
		activateCountdown();
	}
	function activateCountdown() {
		setTimeout(() => {
			history.push('/');
		}, 3000);
	}
	return (
		<div className={styles.container}>
			{submitted && (
				<p className={styles.succes}>
					Form submitted successfully! redirecting to home in {count} seconds
				</p>
			)}
			<div className={styles.signup}>
				<h1 className={styles.signup__title}>Create Account</h1>
				<form
					className={styles.forms}
					action='submit'
					onSubmit={handleSubmit}
					noValidate>
					<div>
						<label htmlFor='firstName'>
							<input
								type='text'
								id='firstName'
								name='firstName'
								placeholder='First Name'
								onChange={handleChange}
								value={values.firstName}
							/>
						</label>
					</div>
					{errors.firstName && (
						<p className={styles.error}>{errors.firstName}</p>
					)}
					<div>
						<label htmlFor='lastName'>
							<input
								type='text'
								id='lastName'
								name='lastName'
								placeholder='Last Name'
								onChange={handleChange}
								value={values.lastName}
							/>
						</label>
					</div>
					{errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
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
					{errors.email && <p className={styles.error}>{errors.email}</p>}
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
					{errors.password && <p className={styles.error}>{errors.password}</p>}
					<div>
						<label htmlFor='password2'>
							<input
								type='password'
								id='password2'
								name='password2'
								placeholder='Confirm Password'
								onChange={handleChange}
								value={values.password2}
							/>
						</label>
					</div>
					{errors.password2 && (
						<p className={styles.error}>{errors.password2}</p>
					)}
					<div className={styles.form__buttons}>
						<Button type='submit' variant='outlined' color='default'>
							Sign up
						</Button>
						<Button variant='outlined' color='primary' onClick={handleClick}>
							Sign In
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
