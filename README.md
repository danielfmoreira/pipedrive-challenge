# Pipedrive Code Challenge - Contact List

A single-page app that renders a list of Persons fetched from [Pipedrive API](https://developers.pipedrive.com/docs/api/v1).

[View Deploy](https://pipedrive-challenge.herokuapp.com/) 


## User Stories

**Required:**
- When a user visits the page, a list of persons fetched from the API is shown.
- When the user clicks one a Person in the list, a modal is shown with that Person's additional details.
- The user can order each Person in the list via drag-and-drop.
- The user can create a new Person using a form and store them using the API.
- The user can delete a Person from the list using the API.

**Extras:**
- The user can filter the list by the name of the contact.
- The user can edit a Person.
- The user can add multiple phones and emails.

## Installation 
Follow the steps below to run the App locally.

1. Fork and Clone this repo
2. Run the following commands
```
$ cd pipedrive-challenge
$ npm install
```

3. Create a .env file on the root folder with the following variables

```
REACT_APP_KEY=< Pipedrive API Key >
REACT_APP_API_URL=< Pipedrive API URL >
```
<em>Note: Pipedrive API Key and API URL will be shared separately by email.</em>

4. Run the App locally
```
$ npm start
```
5. Access the App at [https://locahost:/3000](http://localhost:3000/)


## Solution Formulation
- Reusable and styled components created on my own without external libraries for code showing purposes.
- Implement Global States and Global Styles Components when needed.
- Add Edit form to complete all CRUD operations.
- Add a search bar for a better user experience.
- Form Dialog Modal inspired by Pipedrive CRM.
- Create a company before attaching it to the user.
- Add fake avatar photos uploaded through Pipedrive to mimic the proposed UI.
- Use dotenv for API credential security.
- [Deploy App](https://pipedrive-challenge.herokuapp.com/)  to make it easier for interviewers to evaluate the final result without setting up the project locally.
 
## Libraries / Tools Used
- react: create-react-app for initial setup
- axios: API requests
- dotenv: secure API credentials
- react-beautiful-dnd: drag and drop components
- styled-components: style app using CSS-in-JS
- formik: form helpers and form array field
- yup: form validation

## If I had extra time, I would...
- Make it possible to add/edit profile pictures.
- Create a sort button that would sort the list by name, company, last modified, etc.
- Create a companies list.
- Create a Dashboard Interface with a sidebar for navigation.
- useContext to control portal modal state globally.
- Evaluate performance optimization




