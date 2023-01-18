import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bg from '../../../assets/images/bg.jpg';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import AllRecord from '../../AllRecord/AllRecord';
import './Home.css';

const Home = () => {
  const { user } = useContext(AuthContext);

  const bgImage = {
    backgroundImage: `url(${bg})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    backgroundBlendMode: 'overlay',
  };

  return (
    <div>
      {!user?.email ? (
        <div style={bgImage}>
          <div className="container">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="d-flex flex-column justify-content-center align-items-center gap-3 vh-100 text-center"
            >
              <h1 className="text-white">
                Please Sign In or Register for Managing <br /> Your{' '}
                <span style={{ color: 'aqua' }}>Patient's Record.</span>
              </h1>
              <div className="d-flex gap-3">
                <Link to="/signin">
                  <Button variant="success" className="btn-sign-in fw-bold">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="btn-register fw-bold">Register</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* All Patient Record */}
          <AllRecord />
        </div>
      )}
    </div>
  );
};

export default Home;
