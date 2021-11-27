import { Container } from 'react-bootstrap';
import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  HashRouter as Router,
} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Register from './screens/Register';
import React, { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';

export const userContext = React.createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin);
  return (
    <userContext.Provider value={{ isLogin, setIsLogin }}>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<LoginScreen />} exact />
            <Route path='/register' element={<Register />} />
            <Route
              exact
              path='/home'
              element={<ProtectedRoute isLogin={isLogin} />}
            />
          </Routes>
        </Container>
      </Router>
    </userContext.Provider>
  );
};

export default App;
