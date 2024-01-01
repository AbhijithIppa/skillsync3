import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './ModalQ.css';

import { auth, db,app } from '../../firebase/server';
import { getFirestore,doc,updateDoc, increment } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
const ModalQ = () => {
  const [show, setShow] = useState(true);
  const [score, setScore] = useState(0);
  const firestore=getFirestore(app);
  const nav=useNavigate()
  let gotoHome=()=>{
    nav("/home")
  }
  const updateStreak = async () => {
    try {
      const firestore = getFirestore(app);
      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userDocRef, {
        streak: increment(1),
      });
    } catch (error) {
      console.error('Error updating streak:', error);
    }
  };

  const [questions, setQuestions] = useState([
    {
      questionText: 'What is the output of 1+(+"1"?',
      options: [
        { optionText: '11', isCorrect: false },
        { optionText: '2', isCorrect: true },
        { optionText: '1(1', isCorrect: false },
        { optionText: 'Not defined', isCorrect: false },
      ],
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleOptionClick = (option) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (option.isCorrect) {
      setScore((prevScore) => prevScore + 10);
      setTimeout(() => {
        alert(`YEHH YOU GOT RIGHT!!!`);
      }, 300);
      updateStreak()
    }else{
      setTimeout(() => {
        alert(`OOPS! YOU GOT WRONG!!!`);
      }, 300);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShow(false);
      
      gotoHome()
    }
  };

 

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="modal">
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Quiz Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="question-container">
            <h2>{currentQuestion.questionText}</h2>
            {currentQuestion.options.map((option, index) => (
              <button key={index} onClick={() => handleOptionClick(option)}>
                {option.optionText}
              </button>
            ))}
          </div>
          <div className="score-container">
            <h2>Score: {score}</h2>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalQ;
