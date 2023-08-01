import { Link, useParams } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const params = useParams();
  console.log(params.aboutParam);

  return (
    <div className='header'>
      <Link to={'/'}>
        <span>Home</span>
      </Link>
      <Link to={'/about/testParam'}>
        <span>About 1</span>
      </Link>
      <Link to={'/contacts'}>
        <span>Contacts</span>
      </Link>
    </div>
  )
}

export default Header
