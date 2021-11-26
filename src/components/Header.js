import { useContext, useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../App';

const Header = () => {
  const { isLogin, setIsLogin } = useContext(userContext);
  const [text, setText] = useState('');
  useEffect(() => {
    if (isLogin) {
      setText('SignOut');
    } else {
      setText('Login');
    }
  }, [isLogin]);
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Link to={isLogin ? '/home' : '/'} className='text-link'>
            <Navbar.Brand>Shaadi.com - FE </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link className='customHover '>
                <i className='fas fa-user-plus m-2 '></i>
                <Link
                  to='/'
                  onClick={() => setIsLogin(false)}
                  className='text-link'
                >
                  {text}
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
