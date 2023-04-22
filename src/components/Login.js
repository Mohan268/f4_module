import { useState } from 'react';
import "./Login.css"

export default function Login() {
  const [usernameState, setUsernameState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: usernameState,
        password: passwordState,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.id);
        window.location.href = '/profile';
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div class="box">
      <h1>Login</h1>
      {error && <div>{error}</div>}
      <div>
        <label>
          Username:{' '}
          <input
            className='username'
            type="text"
            value={usernameState}
            onChange={(e) => setUsernameState(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:{' '}
          <input
            className='password'
            type="password"
            value={passwordState}
            onChange={(e) => setPasswordState(e.target.value)}
          />
        </label>
      </div>
      <button className='button' onClick={handleLogin}>Login</button>
    </div>
  );
}