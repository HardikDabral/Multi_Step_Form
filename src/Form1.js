import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const Form1 = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const cardStyle = {
        width: '700px',
        height: '65px',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        border: '1px solid #ccc', // Add border
    boxShadow: '0 2px 4px rgba(0.1, 0.1, 0.1, 0.2)', // Add shadow effect
    };

    const contentStyle = {
        margin: '',
        display: 'flex',
        alignItems: 'center',
    };

    const textStyle = {
        marginLeft: '30px', // Adjust margin as needed
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
                Which describes you best?
            </h1>
            <h5 style={containerStyle} className="mt-2 mb-3">
                <span style={{ color: '#808080' }}>
                    This will help you personalize better
                </span>
            </h5>
            {[...Array(6)].map((_, index) => (
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
                                    src="https://cdn-icons-png.freepik.com/256/3429/3429191.png?ga=GA1.1.71111488.1703915188&"
                                    style={{ width: '50px', height: '48px' }} alt=''
                                />
                            )}
                            {index === 1 && (
                                <img
                                    src="https://cdn-icons-png.freepik.com/256/1886/1886806.png?ga=GA1.1.71111488.1703915188&"
                                    style={{ width: '50px', height: '48px' }} alt=''
                                />
                            )}
                            {index === 2 && (
                                <img
                                    src="https://cdn-icons-png.freepik.com/256/13161/13161737.png?ga=GA1.1.71111488.1703915188&"
                                    style={{ width: '50px', height: '48px' }} alt=''
                                />
                            )}
                            {index === 3 && (
                                <img
                                    src="https://cdn-icons-png.freepik.com/256/2267/2267652.png?ga=GA1.1.71111488.1703915188&"
                                    style={{ width: '50px', height: '48px' }} alt=''
                                />
                            )}
                            {index === 4 && (
                                <img
                                    src="https://cdn-icons-png.freepik.com/256/3429/3429440.png?ga=GA1.1.71111488.1703915188&"
                                    style={{ width: '50px', height: '48px' }} alt=''
                                />
                            )}
                            {index === 5 && (
                                <img
                                    src="https://cdn-icons-png.freepik.com/256/1886/1886630.png?ga=GA1.1.71111488.1703915188&"
                                    style={{ width: '50px', height: '48px' }} alt=''
                                />
                            )}
                            <Card.Text style={textStyle}>
                                {index === 0 && (
                                    <>Student <span style={{ color: '#808080' }}>or soon to be enrolled</span></>
                                )}
                                {index === 1 && (
                                    <>Professional <span style={{ color: '#808080' }}>pursuing a career</span></>
                                )}
                                {index === 2 && (
                                    <>Parent <span style={{ color: '#808080' }}>of a school-age child</span></>
                                )}
                                {index === 3 && (
                                    <>Lifelong learner</>
                                )}
                                {index === 4 && (
                                    <>Teacher</>
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
