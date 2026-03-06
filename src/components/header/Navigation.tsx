
import './styles.css';
import { Link } from 'react-router-dom';
import profileImg from '../../assets/profile.png';

export default function Navigation() {

  const token = localStorage.getItem("token");


  return (
    <div>
      <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>

        {token && <Link to="/profile" className="nav-item">
          <img src={profileImg} alt="Profile" style={{ width: '40px', height: '40px' }} />
        </Link>}

        {!token && <Link to="/login" className="nav-item">Login</Link>}
        {!token && <Link to="/register" className="nav-item">Register</Link>}

        {token && (
          <Link
            to="#"
            className="nav-item"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            Logout
          </Link>
        )}

        <Link to="/about" className="nav-item">About</Link>
      </nav>
    </div >
  );
}
