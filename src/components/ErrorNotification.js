import React from 'react';
import '../styles/ErrorNotification.css';

// Component to display an error notification with a close button
const ErrorNotification = ({ message, onClose }) => {
  return (
    <div className="error-notification">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ErrorNotification;


