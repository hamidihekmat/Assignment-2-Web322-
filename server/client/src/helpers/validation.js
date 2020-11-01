export default function validate(values) {
	let errors = {};

	// logic for empty string
	if (!values.firstName) {
		errors.firstName = 'first name is required';
	}
	if (!values.lastName) {
		errors.lastName = 'last name is required';
	}
	if (!values.email) {
		errors.email = 'email is required';
	}
	if (!values.password) {
		errors.password = 'password is required';
	}
	if (!values.password2) {
		errors.password2 = 'confirm password is required';
	}

	return errors;
}
