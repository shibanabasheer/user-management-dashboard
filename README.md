# User Management Dashboard

This project is a simple User Management Dashboard built with React.js. It allows users to view, add, edit, and delete user details. The backend API used for fetching and managing user data is the JSONPlaceholder's `/users` endpoint.

## Features

- View a list of users
- Add new users
- Edit existing users
- Delete users
- Error handling and validation

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/shibanabasheer/user-management-dashboard.git
   cd user-management-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

   The application will start on `http://localhost:3000`.

## Reflection on Development Process

### Challenges Faced

- **State Management:** Managing the state of the selected user and ensuring that the form updates correctly based on user actions was a bit challenging.
- **Error Handling:** Implementing effective error handling for the API requests and providing meaningful feedback to the user required careful consideration.
- **Validation Logic:** Ensuring proper client-side validation, especially with email formats, involved some additional research and testing.

### Improvements for Future Development

- **Unit Testing:** Given more time, I would implement more comprehensive unit tests, particularly for form validation and API request handling.
- **Enhanced UI/UX:** The UI could be further refined to include better visual feedback (e.g., loading spinners, success messages).
- **Error Handling:** Improved error handling strategies, such as differentiating between different types of errors (network issues, validation errors, etc.), would be beneficial.
- **Data Persistence:** Implementing a real backend with persistent data storage instead of using a mock API would make the application more robust.

## License

This project is open source and available under the [MIT License](LICENSE).
