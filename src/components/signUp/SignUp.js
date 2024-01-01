import React from 'react';
import "./SignUp.css";
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, db } from "../../firebase/server";
import { Alert } from 'react-bootstrap';
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";  // Add this line
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usrName, setUsrName] = useState("");
  const [profile, setProfile] = useState("");
  const [skills, setSkills] = useState("");
  const nav=useNavigate();
  let gotoLogin=()=>{
    nav("/login")
  }

  let createUser = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const uid = user.uid;
      const userDocRef = doc(collection(firestore, "users"), uid);

      // Set the user details in the document
      await setDoc(userDocRef, {
        username: usrName,
        email: email,
        profile: profile,
        skills:skills,
        followers: {},
        streak:0
      });

      console.log("User created successfully!", user);
      console.log("User document added successfully!", userDocRef);

      alert("User created successfully!");
      gotoLogin()
    } catch (error) {
      console.error("Error creating user: ", error.message);
      alert("Error creating user. Please check your details.");
    }
  };

  return (
   

<div className="signup-container">
      <div className="signup-form">
        <img src="left-image-url" alt="Left Image" />
        <h2>Signup</h2>
        <form onSubmit={createUser}>
        <div>
          <label>UserName</label>
          <input
            id="usrName"
            name="usrName"
            value={usrName}
            onChange={(e => { setUsrName(e.target.value) })}
          />
        </div>
        <div>
          <label>Profile</label>
          <input
            id="profile"
            name="profile"
            value={profile}
            onChange={(e => { setProfile(e.target.value) })}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e => { setEmail(e.target.value) })}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label>Enter your Skills:</label>
          <input
          id="skills"
          value={skills}
          onChange={(e)=>{setSkills(e.target.value)}}
          ></input>
        </div>
        <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;