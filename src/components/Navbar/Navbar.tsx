import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='nav'>
      <Container fluid>
        <div className='nav__logo'>Logo</div>
        <ul className='nav__list'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
