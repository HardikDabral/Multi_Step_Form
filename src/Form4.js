import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const Form4 = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardIndex) => {
    setSelectedCard(cardIndex);
  };

  const cardContainerStyle = {
    marginTop: '100px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px', 
  };

  const cardStyle = (index) => ({
    width: '250px',
    height: '250px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    border: '1px solid #ccc', 
    boxShadow: selectedCard === index ? '0px 0px 10px 3px #007bff' : 'none', 
    transform: selectedCard === index ? 'scale(1.05)' : 'scale(1)', 
  });

  const cardTextStyle = {
    textAlign: 'center',
    fontSize: '18px',
    lineHeight: '1.5',
  };

  const mathStyle = {
    fontSize: '24px', 
  };

  return (
    <div style={{padding: '40px'}}>
      <h1 style={{ textAlign: 'center'}}>Which is your math comfort level?</h1>

      <h5 style={{ textAlign: 'center', marginBottom: '50px', marginTop: '20px' }}>Choose the highest level you feel confident in -- you can always adjust later.</h5>

      <div style={cardContainerStyle}>
        {[...Array(4)].map((_, index) => (
          <Card
            key={index}
            style={cardStyle(index)} 
            onClick={() => handleCardClick(index)}
          >
            <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              {index === 0 &&
                <>
                  <InlineMath math="5 \times \frac{1}{2} = ?" style={mathStyle} />
                  <div style={cardTextStyle} className='mt-3'>
                    Airthematic
                    <div>
                      <span style={{ color: '#808080' }}>Introductory</span>
                    </div>
                  </div>
                </>
              }
              {index === 1 &&
                <>
                  <BlockMath math="3x + 5 = 4" style={mathStyle} />
                  <div style={cardTextStyle} className='mt-0'>
                    Basic Algebra
                    <div>
                      <span style={{ color: '#808080' }}>Foundational</span>
                    </div>
                  </div>
                </>
              }
              {index === 2 &&
                <>
                  <InlineMath math="x = \frac{{-b \pm \sqrt{{b^2 - 4ac}}}}{{2a}}" style={mathStyle} />
                  <div style={cardTextStyle} className='mt-4'>
                    Intermediate Algebra
                    <div>
                      <span style={{ color: '#808080' }}>Intermediate</span>
                    </div>
                  </div>
                </>
              }
              {index === 3 &&
                <>
                  <BlockMath math="\int_{a}^{b} f(x) \, dx = F(b)" style={mathStyle} />
                  <div style={cardTextStyle} >
                    Calculus
                    <div>
                      <span style={{ color: '#808080' }}>Advance</span>
                    </div>
                  </div>
                </>
              }
            </Card.Body>
          </Card>
        ))}
      </div>
      </div>
  );
};

export default Form4;
