import React, { useState } from 'react';

const LoginPage = () => {
  const hardcodedUsername = 'exampleUser';
  const hardcodedPassword = 'examplePassword';

  const [username, setUsername] = useState(hardcodedUsername);
  const [password, setPassword] = useState(hardcodedPassword);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === hardcodedUsername && password === hardcodedPassword) {
      localStorage.setItem('isLogin', 'true');
      console.log('Login successful!');
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
