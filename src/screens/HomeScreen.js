import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { Container, Spinner } from 'react-bootstrap';
const HomeScreen = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const fetchUsers = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://randomuser.me/api/?results=${20}`
    );
    console.log(data.results);
    setUsers((prev) => [...prev, ...data.results]);
    setLoading(false);
  };

  const scrollToEnd = () => {
    setPage((prev) => prev + 1);
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };
  return (
    <Container>
      {users.map((user) => (
        <Card data={user} />
      ))}
      {loading && (
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      )}
    </Container>
  );
};

export default HomeScreen;
