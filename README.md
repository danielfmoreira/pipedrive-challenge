# Pipedrive Code Challenge - Contact List

A single page app that renders a list of Persons fetched from [Pipedrive API](https://developers.pipedrive.com/docs/api/v1).


## User Stories

**Required:**
- When a user visits the page, a list of persons fetched from the API is shown.
- When the user clicks in on the of Persons in the list, a modal is shown with that Person's additional details.
- The user is also able to order each Person in the list via drag-and-drop.
- The user can create a new Person using a form and store them using the API.
- The user can delete a Person from the list using the API.

**Extras:**
- The user can filter the list by the name of the contact.
- The user can edit a Person.


## Solution Formulation
- Tried to create as reusable and styled components created by me own without external libraries for code showing purposes.
- Implement Global States and Global Styles Components when needed.
- Add Edit form to complete all CRUD operations.
- Add a search bar for better user experience.
- Form Dialog Modal inspired by Pipedrive CRM.
- Create a company before attaching to the user.
- Add fake avatar photos on Pipedrive to mimic proposed UI.
- Use dotenv for API credential security
- Deploy app to make it easier for interviewers to evaluate final result without having to setup project.
 
## Libraries / Tools Used
- react: create-react-app for initial setup
- axios: API requests
- dotenv: secure API credentials
- react-beautiful-dnd: drag and drop components
- styled-components: style app using CSS-in-JS
- yup: form validation






