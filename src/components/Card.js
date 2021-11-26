import { Accordion } from 'react-bootstrap';
import './Card.css';
const Card = ({ data }) => {
  return (
    <div className='parent-container'>
      <div className='card-container customHover'>
        <div className='details'>
          {data.name.first} {data.name.last}
        </div>
        <div className='image'>
          <img src={data.picture.thumbnail} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Card;
