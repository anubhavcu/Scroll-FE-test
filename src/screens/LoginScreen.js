import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { users } from '../users';
import { useContext } from 'react';
import { userContext } from '../App';
const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { isLogin, setIsLogin } = useContext(userContext);
  console.log(isLogin);
  const handleClick = () => {
    console.log('button clicked ');
    if (users.find((user) => user.userName === userName)) {
      setIsLogin(true);
    } else {
      alert('enter valid credentials ...');
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '100px',
      }}
    >
      <Form
        onSubmit={handleClick}
        style={{
          width: '40rem',
          border: '2px solid grey',
          padding: '50px',
          borderRadius: '30px',
        }}
      >
        <h3 className='m-3'>Enter your details to continue.. </h3>
        <Form.Group className='m-3'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter username'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='m-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {/* <Link to={isLogin ? '/home' : '/'}> */}
        <Link to='/home'>
          <Button
            className='m-3'
            variant='primary'
            type='submit'
            onClick={handleClick}
          >
            Login
          </Button>
        </Link>
        <Row className=''>
          <Col className='ms-3'>
            Don't have an account ? Register{' '}
            <Link to='/register' style={{ color: 'blue' }}>
              here
            </Link>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default LoginScreen;
