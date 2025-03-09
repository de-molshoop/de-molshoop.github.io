import { useState, useRef, useEffect } from "react";
import "./Quiz.css";

const QuizInputPage = () => {
    const [cards, setCards] = useState([{ question: "", answer: "" }]);
    const lastCardRef = useRef(null);

    const handleChange = (index, field, value) => {
        const newCards = [...cards];
        newCards[index][field] = value;
    setCards(newCards);
    };

    const addCard = () => {
        setCards((prevCards) => [...prevCards, { question: "", answer: "" }]);
    };

    const removeCard = (index) => {
        setCards(cards.filter((_, i) => i !== index));
    };

    useEffect(() => {
        if (lastCardRef.current) {
        lastCardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [cards.length]);

    return (
        <div className="quiz-container">
        {cards.map((card, index) => (
            <div key={index} className="quiz-card" ref={index === cards.length - 1 ? lastCardRef : null}>
            <input 
                type="text" 
                placeholder="Vraag" 
                value={card.question} 
                onChange={(e) => handleChange(index, "question", e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Antwoord" 
                value={card.answer} 
                onChange={(e) => handleChange(index, "answer", e.target.value)}
            />
            <div className="remove-btn-container">
                <button className="remove-btn" onClick={() => removeCard(index)}>Verwijderen</button>
            </div>
            </div>
        ))}
        
        <div className="add-btn-container">
            <button className="add-btn" onClick={addCard}>Nieuwe kaart</button>
        </div>
        </div>
    );
};

export default QuizInputPage;
