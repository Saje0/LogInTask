import { useNavigate } from 'react-router-dom';
import NavLogo from '../../assets/navbar-icon.svg';
import WebsiteIcon from '../../assets/website-icon.svg';

const Navbar = () => {
  const navigate = useNavigate();

  const handleGoToWebsite = () => {
    navigate('/login');
  };

  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <a href='#' className='navbar-logo'>
          <img src={NavLogo} alt='Logo' />
          Black IN Dashboard
        </a>
      </div>
      <div className='navbar-button'>
        <a className='navbar-btn' onClick={handleGoToWebsite}>
          <img src={WebsiteIcon} alt='Button Logo' />
          Go To Website
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
