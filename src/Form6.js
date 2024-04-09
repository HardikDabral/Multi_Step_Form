import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const LearningPaths = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleMouseEnter = (cardIndex) => {
        if (selectedCard !== cardIndex) {
            setHoveredCard(cardIndex);
        }
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    const handleCardClick = (cardIndex) => {
        setSelectedCard(cardIndex);
    };

    return (
        <div className="p-4">
            {isLoading ? (
                <div className="text-center">
                    <lord-icon
                        src="https://cdn.lordicon.com/afixdwmd.json"
                        trigger="loop"
                        delay="500"
                        style={{ width: '100px', height: '100px' , marginTop: '200px' }}
                        
                    ></lord-icon>
                    <p className="font-bold text-4xl mt-7">Finding learning path recommendation for you based 
                    <br></br>
                    on your responses
                    </p>
            
                    
                </div>
            ) : (
                <>
                    <h1 className="text-center">Learning paths based on your answers</h1>
                    <h5 className="text-center my-10 text-gray-600">Choose one to get started. You can switch anytime.</h5>
                    <div className="flex flex-col md:flex-row justify-center gap-20">
                        <Card
                            className={`w-full md:w-2/5 h-96 cursor-pointer transition-transform border-2 border-transparent hover:border-blue-500 ${
                                (hoveredCard === 0 || selectedCard === 0) && 'border-blue-500 transform scale-110'
                            }`}
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleCardClick(0)}
                        >
                            <Card.Body className="flex flex-col items-center">
                                <span className="badge bg-warning text-dark absolute top-0 left-1/2 transform -translate-x-1/2 -mt-3 px-4 py-2 text-lg" style={{ borderRadius: '9999px' }}>MOST POPULAR</span>
                                <div className="mt-6 text-center">
                                    <Card.Text>
                                        <b>Foundational math</b> helps building your foundational skills in algebra, geometry, and probability. This learning path covers various topics such as basic arithmetic operations, algebraic expressions, geometric shapes, and probability concepts.
                                    </Card.Text>
                                </div>
                                <div className="mt-auto">
                                    <img
                                        src="https://t3.ftcdn.net/jpg/05/61/00/50/240_F_561005074_OIsSf4HMaLgdcYYrvXv0W1eQcMvtk2p6.jpg"
                                        className="w-80 h-44"
                                        alt="Illustration"
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                        <Card
                            className={`w-full md:w-2/5 h-96 cursor-pointer transition-transform border-2 border-transparent hover:border-blue-500 ${
                                (hoveredCard === 1 || selectedCard === 1) && 'border-blue-500 transform scale-110'
                            }`}
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleCardClick(1)}
                        >
                            <Card.Body className="flex flex-col items-center">
                                <div className="mt-6 text-center">
                                    <Card.Text>
                                        <b>Mathematical thinking</b> builds your foundational skills in algebra, geometry, and probability. This learning path focuses on developing critical thinking and problem-solving skills in mathematics. You will explore advanced topics such as mathematical reasoning, proofs, and problem-solving strategies.
                                    </Card.Text>
                                </div>
                                <div className="mt-auto">
                                    <img
                                        src="https://t3.ftcdn.net/jpg/05/62/45/50/240_F_562455059_tNF7uRXUlpU0PFNglrH25HUAevJDpBAY.jpg"
                                        className="w-80 h-44"
                                        alt="Illustration"
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </>
            )}
        </div>
    );
};

export default LearningPaths;

