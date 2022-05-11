import { useContext } from 'react';
import axios from 'axios';
import { ContactListContext } from '../context/contacts.context';
import FlexRow from './Styled/FlexRow.styled';
import { Formik, FieldArray, getIn } from 'formik';
import * as Yup from 'yup';
import { IoTrashBin } from 'react-icons/io5';

const KEY = process.env.REACT_APP_KEY;
const API_URL = process.env.REACT_APP_API_URL;

function EditForm({ person, closeModal }) {
	const { setIsUpdated } = useContext(ContactListContext);

	const initialValues = {
		name: person.name,
		email: person.email,
		phone: person.phone,
		organization: person.org_name,
		assistant: person.ead969773b1c36b82991c53b93516ee07556666e,
		groups: person.e17b7fccc25fc6a50263ba9421b9d0089b78ab86,
		location: person.org_id ? person.org_id.address : '',
	};

	const optionsPhone = ['Work', 'Home', 'Mobile', 'Other'];
	const optionsEmail = ['Work', 'Home', 'Other'];
	const phoneRegExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

	//Form Validation Schema
	const personSchema = Yup.object({
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

	const handleSubmit = async (values, isValid) => {
		try {

			if (!isValid) return;

			const personId = person.id;
			let orgId = person.org_id ? person.org_id.value : '';

			//If organization exists and needs update
			if (person.org_id) {
				if (values.organization !== person.org_id.name || values.location !== person.org_id.address) {
					await axios.put(`${API_URL}/organizations/${person.org_id.value}?api_token=${KEY}`, {
						name: values.organization,
						address: values.location,
					});
				}
			}

			//If organization does not exist, create one and add location
			if (!person.org_id && values.organization) {
				const newOrganization = await axios.post(`${API_URL}/organizations?api_token=${KEY}`, {
					name: values.organization,
				});

				orgId = newOrganization.data.data.id;

				await axios.put(`${API_URL}/organizations/${orgId}?api_token=${KEY}`, {
					name: values.name,
					address: values.organization,
				});
			}

			// Create a person
			const updatedPerson = {
				name: values.name,
				email: values.email,
				phone: values.phone,
				org_id: orgId,
				ead969773b1c36b82991c53b93516ee07556666e: values.assistant,
				e17b7fccc25fc6a50263ba9421b9d0089b78ab86: values.groups,
			};

			await axios.put(`${API_URL}/persons/${personId}?api_token=${KEY}`, updatedPerson);

			setIsUpdated(false);
			closeModal();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Formik initialValues={initialValues} validationSchema={personSchema} onSubmit={handleSubmit}>
			{(formik) => {
				const { values, handleChange, handleSubmit, errors, touched, handleBlur, isValid } = formik;

				const hasMultiplePhones = values.phone.length > 1 ? true : false;
				const hasMultipleEmails = values.email.length > 1 ? true : false;

				return (
					<form id="edit-person-form" onSubmit={handleSubmit} noValidate>
						<label htmlFor="name">Name</label>
						<input
							name="name"
							id="name"
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
							className={errors.name && touched.name ? 'input-error' : ''}
						/>
						<div className="form-error">{errors.name && touched.name && <span>{errors.name}</span>}</div>
						<label htmlFor="organization">Organization</label>
						<input name="organization" id="organization" value={values.organization} onChange={handleChange} onBlur={handleBlur} />

						<label htmlFor="phone">Phone</label>

						<FieldArray name="phone">
							{({ push, remove }) => (
								<>
									{values.phone.map((item, i) => {
										const name = `phone[${i}].value`;
										const errorMsg = getIn(errors, name);
										return (
											<div key={item + i}>
												<FlexRow justify="space-between" gap="0.8rem">
													<input name={name} value={values.phone.value} placeholder={item.value} onChange={handleChange} onBlur={handleBlur} />
													<select name={`phone[${i}].label`} value={item.label} onChange={handleChange} onBlur={handleBlur}>
														{optionsPhone.map((label) => (
															<option key={label} value={label.toLowerCase()}>
																{label}
															</option>
														))}
													</select>
													{hasMultiplePhones && <IoTrashBin size="20" color="grey" type="button" onClick={() => (hasMultiplePhones ? remove(i) : '')} />}
												</FlexRow>
												<div className="form-error-array">{errorMsg ? <span>{errorMsg}</span> : ''}</div>
											</div>
										);
									})}
									<span className="add-array" type="button" onClick={() => push({ value: '', label: '' })}>
										+Add phone
									</span>
								</>
							)}
						</FieldArray>

						<label htmlFor="email">Email</label>

						<FieldArray name="email">
							{({ push, remove }) => (
								<>
									{values.email.map((item, i) => {
										const name = `email[${i}].value`;
										const errorMsg = getIn(errors, name);
										return (
											<div key={item + i}>
												<FlexRow justify="space-between" gap="0.8rem">
													<input name={name} value={values.email.value} placeholder={item.value} onChange={handleChange} onBlur={handleBlur} />
													<select name={`email[${i}].label`} value={item.label} onChange={handleChange} onBlur={handleBlur}>
														{optionsEmail.map((label) => (
															<option key={label} value={label.toLowerCase()}>
																{label}
															</option>
														))}
													</select>
													{hasMultipleEmails && <IoTrashBin size="20" color="grey" type="button" onClick={() => (hasMultipleEmails ? remove(i) : '')} />}
												</FlexRow>
												<div className="form-error-array">{errorMsg ? <span>{errorMsg}</span> : ''}</div>
											</div>
										);
									})}
									<span className="add-array" type="button" onClick={() => push({ value: '', label: '' })}>
										+Add email
									</span>
								</>
							)}
						</FieldArray>

						<label htmlFor="assistant">Assistant</label>
						<input name="assistant" id="assistant" value={values.assistant} onChange={handleChange} onBlur={handleBlur} />

						<label htmlFor="groups">Groups</label>
						<input name="groups" id="groups" value={values.groups} onChange={handleChange} onBlur={handleBlur} />

						<label htmlFor="location">Location</label>
						<input name="location" id="location" value={values.location} onChange={handleChange} onBlur={handleBlur} />
					</form>
				);
			}}
		</Formik>
	);
}

export default EditForm;
