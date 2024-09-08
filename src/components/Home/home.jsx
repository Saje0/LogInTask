import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Home = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Check if the token exists in cookies
    const token = Cookies.get('token');
    const email = Cookies.get('userEmail'); // Assume email is saved in cookies for this example
    if (!token) {
      navigate('/login'); // Redirect to login if no token is found
    } else {
      setUserEmail(email); // Set the email state to display it
    }
  }, [navigate]);

  return (
    <div className='home-container'>
      <div className='welcome-box'>
        <h1>Welcome to Dashboard</h1>
        <p>{userEmail ? `Logged in as: ${userEmail}` : 'Eng.Yousef Ahmed'}</p>
      </div>
    </div>
  );
};

export default Home;
