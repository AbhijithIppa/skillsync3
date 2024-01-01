import React from 'react';
import './Card.css';
import { AiFillAccountBook } from "react-icons/ai";
import { VscHeartFilled } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { FaHeartCircleCheck } from "react-icons/fa6";

import {app} from "../../firebase/server";
import {getDatabase,ref,set} from "firebase/database"
import { Button } from 'react-bootstrap';


const db=getDatabase(app);

function Card() {
  
  const putData=()=>{
    set(ref(db,"users/anshu"),{
      id:1,
      name:"anshu"
    })
  }
  return (



    <div className="card-container">

      <div>

      {/* <Button onClick={putData}>Click Here</Button> */}

      </div>
      <div className="header">
        <p>Followers<FaHeartCircleCheck></FaHeartCircleCheck></p>
        <p>Status</p>
      </div>

      <div className="content">
        
        <div className="profile-info">
          <img
            className="profile-image"
            src="https://imgs.search.brave.com/x1N43nbrsA8M3Y4jlLOgBsQoM_D9t8BaVKh_1qqLaCo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5UZGxOV0kx/TURjdE16UTVOUzAw/WldNNExXRXdOR0l0/TnpVM1lXRmpPVEpr/WW1NMVhrRXlYa0Zx/Y0dkZVFWUm9hWEpr/VUdGeWRIbEpibWRs/YzNScGIyNVhiM0py/Wm14dmR3QEAuX1Yx/X1FMNzVfVVg1MDBf/Q1IwLDAsNTAwLDI4/MV8uanBn"
            alt="Profile"
          />
          <div className="profile-details">
            <p className="name">Brooke Kelly </p>
            <p className="profile-link">
              <i className="fab fa-linkedin"></i> {/* Example Font Awesome icon */}
              Profile<VscAccount></VscAccount>
            </p>
          </div>
        </div>
        
        <div className="status">
          <p><VscHeartFilled></VscHeartFilled>Connected</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
