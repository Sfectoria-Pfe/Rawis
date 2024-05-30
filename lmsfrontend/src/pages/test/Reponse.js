import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Resultats from './Resultats';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FullButton from '../../component/Buttons/FullButton';
import { MyContext } from '../../router/Router';

const ReponseWindow = styled.div`
    text-align: center;
    font-size: clamp(20px, 2.5vw, 10px);
    margin-top: 2em;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;

    @media screen and (min-width: 1180px) {
        width: 80%;
    }
`;

const Option = styled.label`
    display: block;
    border: 1px solid #616A94; /* couleur de la bordure */
    border-radius: 10px;
    padding: 12px 30px;
    text-decoration: none;
    color: #ffffff;
    background-color: #424242; /* couleur de fond par défaut */
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;
    
    &:hover {
        background-color: #757575; /* couleur de survol */
    }

    ${(props) =>
        props.selected &&
        `
        background-color: #A020F0; /* couleur de fond violette lorsqu'une option est sélectionnée */
        color: #ffffff; /* couleur du texte blanc lorsqu'une option est sélectionnée */
    `}
`;


const Question = styled.div`
    width: 100%;
    margin: 1rem auto;
    font-weight: bold; /* Met le texte en gras */
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
    const [selectedOptionIds, setSelectedOptionIds] = useState([]);
    const [questionId, setQuestionId] = useState("");
    const { idChapitre } = useParams()

    console.log(selectedOptions, "selectedOptions")
    const user = useContext(MyContext)


    const fetchQcm = async () => {
        try {
            const resp = await axios.get(`http://localhost:4000/quizs/${idChapitre}`);

            const quizsData = resp.data;

            // Créer une nouvelle structure de questions à partir des données récupérées
            setQuestions(quizsData);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(questions, "quizsData");
    console.log(selectedOptionIds, "selectedOptionIds");

    const reponse = async () => {

    }


    useEffect(() => {
        // Récupérer les questions depuis la base de données au chargement du composant
        fetchQcm();
    }, []);

    // const handleNextQuestion = async () => {
    //     try {
    //         setUserResponses(selectedOptionIds.map((e, i) => {
    //             return (
    //                 { userId: user.id, propQcmId: e, quizId: questionId }
    //             )
    //         }))
    //         axios.post('http://localhost:4000/reponses-q/many', userResponses)
    //         setNumber(number + 1);
    //     } catch (error) { console.log(error) }

    // };
    const handleNextQuestion = () => {
        try {
            const userResponsesData = selectedOptionIds.map((e, i) => ({
                userId: user.id,
                propQcmId: e,
                quizId: questionId
            }));
            setUserResponses(userResponsesData).then(() => {
                    axios.post('http://localhost:4000/reponses-q/many', userResponsesData)
                        .then(() => {
                            setNumber(number + 1);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(error => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    };
    
    console.log(userResponses, "userResponses");
    const pickAnswer = (index) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[index] = !updatedSelectedOptions[index];
        setSelectedOptions(updatedSelectedOptions);
    };

    return (
        <ReponseWindow className='d-flex justify-content-center align-items-center'>
            <Card style={{ width: '30rem' }}>

                {questions && !showResults && questions[number] &&
                    <>
                        <Question dangerouslySetInnerHTML={{ __html: questions[number]?.question }}></Question>
                        <Options>
                            {questions[number]?.PropQcm?.map((item, index) => (
                                console.log(questions, "item"),
                                <Option key={index} onClick={() => {
                                    // pickAnswer(index)
                                    setQuestionId(questions[number]?.id)
                                    setSelectedOptionIds([...selectedOptionIds, item.id])
                                }}>{item.proposition}</Option>
                            ))}
                        </Options>
                        {number < questions.length - 1 &&
                            <div className='d-flex justify-content-center align-items-center m-2' >
                                <BtnWrapper onClick={handleNextQuestion}>
                                    <FullButton title="Question suivante" />
                                </BtnWrapper></div>
                        }
                    </>
                }
                {!showResults && number === questions?.questions?.length - 1 &&
                    <Button onClick={() => setShowResults(true)}>Voir les résultats</Button>
                }
                {showResults && <Resultats reponses={userResponses} />}
            </Card>
        </ReponseWindow>
    );
};

export default Reponse;

const BtnWrapper = styled.div`
  max-width: 250px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;