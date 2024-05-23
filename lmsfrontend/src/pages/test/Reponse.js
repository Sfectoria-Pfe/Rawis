import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Resultats from './Resultats';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ReponseWindow = styled.div`
    text-align: center;
    font-size: clamp(20px, 2.5vw, 24px);
    margin-top: 10vh;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;

    @media screen and (min-width: 1180px) {
        width: 50%;
    }
`;

const Option = styled.label`
    display: block;
    border: 1px solid orange; /* couleur de la bordure */
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: #616A94;
    background-color: ${(props) => (props.selected ? '#ff7f00' : '#f0f0f0')}; /* couleur de fond */
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;
    
    &:hover {
        background-color: #ff7f00; /* couleur de survol */
        color: white;
    }
`;

const Question = styled.div`
    width: 70%;
    margin: 0 auto;
`;

const Button = styled.button`
    display: block;
    border: none;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: #fff;
    background-color: #007bff; /* couleur de fond */
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;
    
    &:hover {
        background-color: #0056b3; /* couleur de survol */
    }
`;

const Reponse = () => {
    const [questions, setQuestions] = useState(null);
    const [number, setNumber] = useState(0);
    const [pts, setPts] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [userResponses, setUserResponses] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState(Array.from({ length: 4 }, () => false));
    const {idChapitre} = useParams()
    



    const fetchQcm = async () => {
        try {
            const resp = await axios.get(`http://localhost:4000/quizs/${idChapitre}`);
            console.log(resp,"respppppppp");
            const quizsData = resp.data;
            
            // Créer une nouvelle structure de questions à partir des données récupérées
            setQuestions(quizsData);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(questions,"quizsData");


    useEffect(() => {
        // Récupérer les questions depuis la base de données au chargement du composant
        fetchQcm();
    }, []);

    const handleNextQuestion = () => {
        setSelectedOptions(Array.from({ length: 4 }, () => false));
        setNumber(number + 1);
    };

    const pickAnswer = (index) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[index] = !updatedSelectedOptions[index];
        setSelectedOptions(updatedSelectedOptions);
    };

    return (
        <ReponseWindow>
            <Card>

                { questions && !showResults && questions[number] &&
                    <>
                        <Question dangerouslySetInnerHTML={{ __html: questions[number]?.question }}></Question>
                        <Options>
                            {questions[number]?.PropQcm?.map((item, index) => (
                                console.log(questions,"item"),
                                <Option key={index} selected={selectedOptions[index]} onClick={() => pickAnswer(index)}>{item.proposition}</Option>
                            ))}
                        </Options>
                        {number < questions.length - 1 && <Button onClick={handleNextQuestion}>Question suivante</Button>}
                    </>
                }
                { !showResults && number === questions?.questions?.length - 1 &&
                    <Button onClick={() => setShowResults(true)}>Voir les résultats</Button>
                }
                { showResults && <Resultats reponses={userResponses} /> }
            </Card>
        </ReponseWindow>
    );
};

export default Reponse;
