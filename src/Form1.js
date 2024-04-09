import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const Form1 = () => {
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
            <h1 className="text-4xl font-bold">Which describes you best?</h1>
            <h5 className="mt-2 mb-3 text-gray-600">This will help you personalize better</h5>
            {[...Array(6)].map((_, index) => (
                <div className="mb-3" key={index}>
                    <Card
                        className={`w-4/6 mx-auto  cursor-pointer transition-transform duration-200 border-1 border-gray-300 shadow-md ${
                            (hoveredCard === index || selectedCard === index) && 'transform scale-110'
                        } ${selectedCard === index && 'border-black'}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleCardClick(index)}
                    >
                        <Card.Body className="flex items-center py-2">
                            <img
                                src={`https://cdn-icons-png.freepik.com/256/${index === 0 ? '3429/3429191' : index === 1 ? '1886/1886806' : index === 2 ? '13161/13161737' : index === 3 ? '2267/2267652' : index === 4 ? '3429/3429440' : '1886/1886630'}.png`}
                                className="w-12 h-12"
                                alt=""
                            />
                            <Card.Text className="ml-5">
                            {index === 0 && (
                                    <>Student <span className="text-gray-600">or to be enrolled in education program</span></>
                                )}
                                {index === 1 && (
                                    <>Professional <span className="text-gray-600">already pursuing a career</span></>
                                )}
                                {index === 2 && (
                                    <>Parent <span className="text-gray-600">of a school-age child</span></>
                                )}
                                {index === 3 && (
                                    <>Lifelong learner <span className="text-gray-600">continuously seeking knowledge</span></>
                                )}
                                {index === 4 && (
                                    <>Teacher <span className="text-gray-600">dedicated to guiding students</span></>
                                )}
                                {index === 5 && (
                                    <>Other</>
                                )}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default Form1;
