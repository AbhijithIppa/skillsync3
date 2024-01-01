import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from "../NavBar"
import { Nav, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import meme2 from "../../images/meme2.jpg";
import meme3 from "../../images/meme3.jpg"
import meme1 from "../../images/meme1.jpg"
import {auth} from "../../firebase/server"
function Home() {
  const nav = useNavigate();

  let gotoLogin = () => {
    nav("/login");
  };
  return (
    <div className='home-body'>
     
      
      {/* First Section - Welcome */}
      <div className="home-page">
        <div className="text-container">
          <h1 className="text-light">Welcome to SkillSync</h1>
          <p className="text-light">Explore amazing features and content on our platform.</p>
        </div>
        
      </div>

      {/* Second Section - Crazy Coding Stuff */}
      <div className="crazy-coding-section">
        <h2 className='head'>Explore the Crazy Coding Stuff..!!</h2>
        <Carousel className='carousel-container'>
          <Carousel.Item>
            <img
              className="imgclass"
              src={meme2}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgclass"
              src={meme1}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgclass"
              src={meme3}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          {/* Add more Carousel.Items as needed */}
        </Carousel>
      </div>

     
    </div>
  );
}

export default Home;