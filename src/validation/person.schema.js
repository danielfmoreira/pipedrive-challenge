import * as Yup from 'yup';

//Form Validation Schema

const phoneRegExp = /([0-9\s-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

export const personSchema = Yup.object({
	name: Yup.string().required('Name is required'),
	email: Yup.array().of(
		Yup.object().shape({
			value: Yup.string().email('Invalid email'),
		})
	),
	phone: Yup.array().of(
		Yup.object().shape({
			value: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
		})
	),
});
