import { useState } from 'react';
import Button from '../../components/Button/Button';
import { Images } from '../../assets/img/images';
import './Home.scss';

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='home'>
      <h1>This is Homepage</h1>
      <img className='home__img' src={Images.react} alt='react logo' />
      <Button onClick={() => setCount(count + 1)}>You clicked {count} times!</Button>
    </div>
  );
};

export default Home;
