import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const Form2 = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const cardStyle = {
        width: '700px',
        height: '70px',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        border: '1px solid #ccc', 
    boxShadow: '0 2px 4px rgba(0.1, 0.1, 0.1, 0.2)', 
    };

    const contentStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const textStyle = {
        marginLeft: '30px', 
    };

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
        <div style={{padding: '20px'}}>
            <h1>
                Which are you most intrested in?
            </h1>
            <h5 style={containerStyle} className="mt-3 mb-5">
                <span style={{ color: '#808080' }}>
                    Choose just one. This will help us get you started(but we won't limit your experience)
                </span>
            </h5>
            {[...Array(5)].map((_, index) => (
                <div className="mb-3" style={containerStyle} key={index}>
                    <Card
                        style={{
                            ...cardStyle,
                            transform: (hoveredCard === index || selectedCard === index) ? 'scale(1.1)' : 'scale(1)',
                            border: selectedCard === index ? '1px solid #000' : 'none',
                        }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleCardClick(index)}
                    >
                        <Card.Body style={contentStyle}>
                            {index === 0 && (
                                <img
                                    src="https://cdn-icons-png.freepik.com/256/2258/2258210.png?ga=GA1.1.71111488.1703915188&"
                                    style={{ width: '50px', height: '50px' }} alt=''
                                />
                            )}
                            {index === 1 && (
                                <img
                                    src="https://cdn-icons-png.freepik.com/256/3429/3429177.png?ga=GA1.1.71111488.1703915188&"
                                    style={{ width: '50px', height: '50px' }} alt=''
                                />
                            )}
                            {index === 2 && (
                                <img
                                    src="https://cdn-icons-png.freepik.com/256/2258/2258163.png?ga=GA1.1.71111488.1703915188&"
                                    style={{ width: '50px', height: '50px' }} alt=''
                                />
                            )}
                            {index === 3 && (
                                <img
                                    src="https://cdn-icons-png.freepik.com/256/2418/2418004.png?ga=GA1.1.71111488.1703915188&"
                                    style={{ width: '50px', height: '50px' }} alt=''
                                />
                            )}
                            {index === 4 && (
                                <img
                                    src="https://cdn-icons-png.freepik.com/256/1566/1566628.png?ga=GA1.1.71111488.1703915188&"
                                    style={{ width: '50px', height: '50px' }} alt=''
                                />
                            )}
                            <Card.Text style={textStyle}>
                                {index === 0 && (
                                    <>Learning specific skills to advance my career</>
                                )}
                                {index === 1 && (
                                    <>Exploring new topics i am intrested in</>
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