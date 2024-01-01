import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFireAlt } from 'react-icons/fa';
import { auth, db } from '../firebase/server';
import {doc ,getDoc,collection} from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
function NavBar() {
  const nav = useNavigate();
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const fetchStreak = async () => {
        try {
          const currentUser = auth.currentUser;
    
          if (currentUser) {
            const userDocRef = doc(db, 'users', auth.currentUser.uid);
    
            // Listen for changes to the document
            const unsubscribe = onSnapshot(userDocRef, (doc) => {
              const userStreak = doc.data()?.streak || 0;
              setStreak(userStreak);
            });
    
            console.log(currentUser.uid);
            console.log('navbar is reloaded');
    
            // Clean up the listener when the component unmounts
            return () => unsubscribe();
          }
        } catch (error) {
          console.error('Error fetching streak:', error);
        }
    };
    
    fetchStreak();
    }, [auth.currentUser]); // Add auth.currentUser as a dependency

  const gotoQ = () => {
    nav('/modalQ');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          SkillSync
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link text-white" to="/followers">
              Followers
            </Link>
            <Link className="nav-link text-white" to="/suggestions">
              Suggestions
            </Link>
            <FaFireAlt onClick={gotoQ} style={{ color: 'white', marginTop: '10px' }}></FaFireAlt>
            <p className="streak" style={{ color: 'white', marginTop: '6px', marginLeft: '5px' }}>
              {streak}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
