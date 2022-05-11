import * as Yup from 'yup';

//Form Validation Schema

const phoneRegExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

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
