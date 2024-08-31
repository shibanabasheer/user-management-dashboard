import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Fetch all users
export const getUsers = () => axios.get(API_URL);

// Add a new user
export const addUser = (user) => axios.post(API_URL, user);

// Edit an existing user
export const editUser = (id, user) => axios.put(`${API_URL}/${id}`, user);

// Delete a user
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);

