import React, { useState, useEffect } from "react";
import { getDocs, collection, doc,getDoc } from "firebase/firestore";
import { app, db } from "../../firebase/server";
import { useAuthState } from "react-firebase-hooks/auth";

// import "./Followers.css"
import { FaHeartCircleCheck } from "react-icons/fa6";
import { VscHeartFilled, VscAccount } from "react-icons/vsc";
import { getAuth } from "firebase/auth";
function Followers() {
  const [followers, setFollowers] = useState([]);
  const [user] = useAuthState(getAuth(app));

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
  
        // Access the 'followers' field within the document
        
        const followersData = (await getDoc(userDocRef)).data().followers;
  
        // Assuming followers is an object with UIDs as keys
        const followersUids = Object.keys(followersData);
  
        // Create an array of follower documents by fetching each follower document
        const followerDocs = await Promise.all(
          followersUids.map(async (followerUid) => {
            const followerDocRef = doc(db, 'users', followerUid);
            const followerDoc = await getDoc(followerDocRef);
            return {
              id: followerUid,
              ...followerDoc.data(),
            };
          })
        );
  
        console.log(followerDocs);
        setFollowers(followerDocs);
        console.log(followers)
      }
    };
  
    fetchData();
  }, [user]);


  return (
    <div className="followers-container">
      {followers.map((follower, index) => (
      
        <div className="card-container" key={index}>
          <div className="header heading">
            {/* <p>
              {follower.username} 
            </p> */}
            <p className="padding">{follower.status}</p>
          </div>
          <div className="content padding fontfa">
            <div className="profile-info">
              <img
                className="profile-image"
                src={follower.profile}
                alt="Profile"
              />
              <div className="profile-details">
                <p className="name">{follower.username}</p>
               
                <p className="profile-link">
                  <i className="fab fa-linkedin"></i> Profile <VscAccount />
                </p>
              </div>
            </div>
            <div className="status padding">
              
              <div style={{display:"flex"}}>
              <p style={{marginRight:"15px"}}>{follower.skills}</p>
                <VscHeartFilled style={{ color: follower.statusColor }} />
                {follower.connectionStatus}
              </div>  
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Followers;
