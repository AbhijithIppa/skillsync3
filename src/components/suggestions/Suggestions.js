import React, { useState, useEffect } from 'react';
import './Suggestions.css';
import { VscAccount } from "react-icons/vsc";
import {app,db} from "../../firebase/server"
import { getDocs, getFirestore,collection,setDoc,doc,addDoc,getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

function Suggestions() {
 const [followers, setFollowers] = useState([]);
 const [following, setFollowing] = useState([]);
 const [user] = useAuthState(getAuth(app));

 useEffect(() => {
     const fetchData = async () => {
       const querySnapshot = await getDocs(collection(db, 'users'));
       const data = querySnapshot.docs.map((doc) => ({
         id: doc.id,
         ...doc.data(),
       }));
       setFollowers(data);
     };
     fetchData();
 }, []);

 const followUser = async (userId) => {
  const userData = followers.find((user) => user.id === userId);
  const userRef = doc(db, 'users', user.uid);
  const userDoc = await getDoc(userRef);
  const updatedFollowers = {
    ...userDoc.data().followers,
    [userId]: userData,
  };
  await setDoc(userRef, {
    ...userDoc.data(),
    followers: updatedFollowers,
  });
};
 return (
     <div>
       {followers.map((follower) => {
         return (
           <div className="card-container" key={follower.id} >
             <div className="header heading"></div>
             <div className="content padding fontfa">
               <div className="profile-info">
                 <img
                 className="profile-image"
                 src={follower.profile}
                 alt="Profile"
                 />
                 <div className="profile-details">
                 <p className="name">{follower.username}</p>
                 <p>{follower.skills}</p>
                 </div>
               </div>
               <div className="buttons-container">
                 <button className="profile-button">Profile</button>
                 {user && <button className="follow-button" onClick={() => followUser(follower.id)}>Follow</button>}
               </div>
               
             </div>
           </div>
         );
       })}
     </div>
 );
 }
 
export default Suggestions;