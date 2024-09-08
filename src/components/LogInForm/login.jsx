import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Logo from '../../assets/logo.svg';

const LoginForm = () => {
  const [email, setEmail] = useState('admin@admin.com');
  const [password, setPassword] = useState('12345678');

  const uid = 1231; // Dynamic UID (changed when needed)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Sending login request:', { email, password, uid });
      const response = await axios.post(
        `https://one-hand/login?uid=${uid}`,
        {
          email,
          password,
        },
        {
          headers: {
            'X-secret-key': 'OH2024',
          },
        }
      );

      // If the login is successful, store the token in cookies and redirect
      if (response.data.token) {
        Cookies.set('token', 'one-hand1234'); // Save token in cookies
        navigate('/home'); // Redirect to the home page
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <img src={Logo} alt='Logo' />
        <h2>Log In</h2>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
