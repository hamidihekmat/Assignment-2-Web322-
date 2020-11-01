import { useState, useEffect } from 'react';

function useForm(callback, validate) {
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		password2: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState({});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			return callback();
		}
	}, [errors, callback, isSubmitting]);

	return { values, errors, handleChange, handleSubmit };
}

export default useForm;
