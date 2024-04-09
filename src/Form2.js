import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const Form2 = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

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
            <h1 className="text-4xl font-bold">Which are you most interested in?</h1>
            <h5 className="mt-3 mb-5 text-gray-600">
                Choose just one. This will help us get you started (but we won't limit your experience)
            </h5>
            {[...Array(5)].map((_, index) => (
                <div className="mb-3 flex justify-center items-center" key={index}>
                    <Card
                        className={`w-4/6 h-70 cursor-pointer transition-transform duration-200 border-1 border-gray-300 shadow-md ${
                            (hoveredCard === index || selectedCard === index) && 'transform scale-110'
                        } ${selectedCard === index && 'border-black'}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleCardClick(index)}
                    >
                        <Card.Body className="flex items-center py-2">
                            <img
                                src={`https://cdn-icons-png.freepik.com/256/${index === 0 ? '2258/2258210' : index === 1 ? '3429/3429177' : index === 2 ? '2258/2258163' : index === 3 ? '2418/2418004' : '1566/1566628'}.png`}
                                className="w-12 h-12"
                                alt=""
                            />
                            <Card.Text className="ml-4">
                                {index === 0 && (
                                    <>Learning specific skills to advance my career</>
                                )}
                                {index === 1 && (
                                    <>Exploring new topics I am interested in</>
                                )}
                                {index === 2 && (
                                    <>Refreshing my math foundation</>
                                )}
                                {index === 3 && (
                                    <>Exercising my brain to stay sharp</>
                                )}
                                {index === 4 && (
                                   <>Something else</>
                                )}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default Form2;
