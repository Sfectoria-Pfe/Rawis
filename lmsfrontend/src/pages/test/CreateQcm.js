import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const CreateQcm = () => {
  const navigate = useNavigate();
  const { idChapitre } = useParams();
  const [questions, setQuestions] = useState({
    questions: [
      {
        question: "",
        chapitreId: idChapitre,
        propQcm: [
          { proposition: "", status: false },
          { proposition: "", status: false },
          { proposition: "", status: false },
          { proposition: "", status: false }
        ]
      }
    ]
  })

  const handleChange = (e, questionIndex, optionIndex = null) => {
    const { name, value, checked } = e.target;

    if (optionIndex !== null) {
      // Si optionIndex est fourni, cela signifie qu'il s'agit d'une option de QCM
      setQuestions(prevQuestions => {
        const updatedQuestions = {...prevQuestions};
        updatedQuestions.questions[questionIndex].propQcm[optionIndex] = {
          ...updatedQuestions.questions[questionIndex].propQcm[optionIndex],
          [name]: name === 'status' ? checked : value // Si c'est une case à cocher, utilisez checked, sinon utilisez la valeur
        };
        return updatedQuestions;
      });
    } else {
      // Sinon, il s'agit d'une question
      setQuestions(prevQuestions => {
        const updatedQuestions = {...prevQuestions};
        updatedQuestions.questions[questionIndex] = {
          ...updatedQuestions.questions[questionIndex],
          [name]: value
        };
        return updatedQuestions;
      });
    }
  };

  const addQuestion = () => {
    setQuestions(prevQuestions => ({
     questions : [
      ...prevQuestions.questions ,
       { 
        question: '',
        chapitreId: idChapitre,
        propQcm: [
          { proposition: '', status: false },
          { proposition: '', status: false },
          { proposition: '', status: false },
          { proposition: '', status: false }
        ]
      }
    ]

    }))
  }
  console.log(questions);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/quizs", questions);

      navigate('reponse');
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  return (
    <Container className="max-w-md mx-auto space-y-6">
      {questions?.questions?.map((question, questionIndex) => (
        <Form key={questionIndex}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Form.Label>Question {questionIndex + 1}</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your question"
           
                name="question"
                onChange={(e) => handleChange(e, questionIndex)}
              />
            </div>
            <div className="space-y-2">
              <Form.Label>Propositions</Form.Label>
              {question.propQcm?.map((option, optionIndex) => (
                <div key={optionIndex} className="d-flex align-items-center">
                  <Form.Check
                    type="checkbox"
                    checked={option.status}
                    name="status"
                    onChange={(e) => handleChange(e, questionIndex, optionIndex)}
                  />
                  <Form.Control
                    type="text"
                    placeholder={`Option ${optionIndex + 1}`}
                    value={option.proposition}
                    name="proposition"
                    onChange={(e) => handleChange(e, questionIndex, optionIndex)}
                  />
                </div>
              ))}
            </div>
          </div>
        </Form>
      ))}
      <div className="d-flex justify-content-between">
        <Button variant="outline-primary" type="button" onClick={addQuestion}>
          Add Question
        </Button>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </Container>
  );
}

export default CreateQcm;

