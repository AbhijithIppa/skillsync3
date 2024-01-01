import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that the required fields are not empty
    if (!username || !password) {
      alert('Username and password are required');
      return;
    }

    const auth = getAuth();

    try {
      // Perform login using Firebase
      await signInWithEmailAndPassword(auth, username, password);

      // If login is successful, you can redirect or perform any other actions
      console.log('Login successful');

      



      navigate('/home'); // Replace '/dashboard' with the desired redirect path
    } catch (error) {
      // Handle login errors
      console.error('Login error:', error.message);
      alert('Login failed. Please check your username and password.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="text-center mb-4 text-white">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label text-white">
              Email
            </label>
            <input
              type="text"
              className="form-control oval-input"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label text-white">
              Password
            </label>
            <input
              type="password"
              className="form-control oval-input"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-dark text-white mt-3">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
