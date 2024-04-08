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

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    };

    const cardStyle = {
        width: '80%',
        height: '150%',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        border: '1px solid #ccc',
        boxShadow: '0 2px 4px rgba(0.1, 0.1, 0.1, 0.2)',
        margin: '20px',
    };

    const hoveredCardStyle = {
        border: '2px solid #007bff',
    };

    const textStyle = {
        marginLeft: '20px',
    };

    return (
        <div style={{ padding: '20px' }}>
            {isLoading ? ( 
                <div style={{ textAlign: 'center' }}>
                    <lord-icon
                        src="https://cdn.lordicon.com/afixdwmd.json"
                        trigger="loop"
                        delay="500"
                        style={{ width: '100px', height: '100px' , marginTop: '180px' }}
                    ></lord-icon>
                    <p style={{ fontWeight: 'bold' , fontSize: '32px' , marginTop: '10px' }}>Finding learning path recommendation for you based on your responses</p>
                    <p style={{ fontWeight: 'bold' , fontSize: '32px' }}>your responses</p>
                </div>
            ) : (
                
                <>
                    <h1 style={{ textAlign: 'center' }}>Learning paths based on your answers</h1>
                    <h5 style={{ textAlign: 'center', marginBottom: '50px', marginTop: '20px' }}>
                        <span style={{ color: '#808080' }}>
                            Choose one to get started. You can switch anytime.
                        </span>
                    </h5>
                    <div style={containerStyle}>
                        <Card
                            style={{
                                ...cardStyle,
                                ...(hoveredCard === 0 || selectedCard === 0 ? hoveredCardStyle : null),
                                transform: hoveredCard === 0 || selectedCard === 0 ? 'scale(1.1)' : 'scale(1)',
                            }}
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleCardClick(0)}
                        >
                            <Card.Body style={{ display: 'flex', position: 'relative', flexDirection: 'column', alignItems: 'center' }}>
                                <span className="badge bg-warning text-dark" style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '150px', height: '29px', fontSize: '16px', borderRadius: '40px' }}>
                                    MOST POPULAR
                                </span>
                                <div style={{ padding: '0px', marginTop: '20px', textAlign: 'center' }}>
                                    <Card.Text style={textStyle}>
                                    <b>Foundational math</b> helps building your foundational skills in algebra, geometry, and probability. This learning path covers various topics such as basic arithmetic operations, algebraic expressions, geometric shapes, and probability concepts.
                                    </Card.Text>
                                </div>
                                <div style={{ marginTop: 'auto' }}>
                                    <img
                                        src="https://t3.ftcdn.net/jpg/05/61/00/50/240_F_561005074_OIsSf4HMaLgdcYYrvXv0W1eQcMvtk2p6.jpg"
                                        style={{ width: '320px', height: '170px', marginLeft: '0px' }}
                                        alt="Illustration"
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                        <Card
                            style={{
                                ...cardStyle,
                                ...(hoveredCard === 1 || selectedCard === 1 ? hoveredCardStyle : null),
                                transform: hoveredCard === 1 || selectedCard === 1 ? 'scale(1.1)' : 'scale(1)',
                            }}
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleCardClick(1)}
                        >
                            <Card.Body style={{ display: 'flex', position: 'relative', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ padding: '0px', marginTop: '20px', textAlign: 'center' }}>
                                    <Card.Text style={textStyle}>
                                    <b>Mathematical thinking</b> builds your foundational skills in algebra, geometry, and probability. This learning path focuses on developing critical thinking and problem-solving skills in mathematics. You will explore advanced topics such as mathematical reasoning, proofs, and problem-solving strategies. 
                                    </Card.Text>
                                </div>
                                <div style={{ marginTop: 'auto' }}>
                                    <img
                                        src="https://t3.ftcdn.net/jpg/05/62/45/50/240_F_562455059_tNF7uRXUlpU0PFNglrH25HUAevJDpBAY.jpg"
                                        style={{ width: '320px', height: '170px', marginLeft: '0px' }}
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
