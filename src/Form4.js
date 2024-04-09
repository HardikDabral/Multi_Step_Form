import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const Form4 = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = (cardIndex) => {
    if (selectedCard === cardIndex) {
      setSelectedCard(null);
    } else {
      setSelectedCard(cardIndex);
    }
  };

  const handleMouseEnter = (cardIndex) => {
    if (selectedCard !== cardIndex) {
      setHoveredCard(cardIndex);
    }
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="p-8">
      <h1 className="text-center">Which is your math comfort level?</h1>
      <h5 className="text-center mt-5 mb-10">Choose the highest level you feel confident in -- you can always adjust later.</h5>
      <div className="flex flex-wrap justify-center gap-8">
        {[...Array(4)].map((_, index) => (
          <Card
            key={index}
            className={`w-60 h-60 cursor-pointer transition-transform duration-200 border border-gray-300 shadow-md ${selectedCard === index ? 'transform scale-105 border-blue-500' : hoveredCard === index ? 'transform scale-110' : ''}`}
            onClick={() => handleCardClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Card.Body className="flex flex-col items-center justify-center py-5">
              {index === 0 &&
                <>
                  <InlineMath math="5 \times \frac{1}{2} = ?" className="text-2xl mb-3" />
                  <div className="text-lg">
                    Airthematic
                    <div>
                      <span className="text-gray-600">Introductory</span>
                    </div>
                  </div>
                </>
              }
              {index === 1 &&
                <>
                  <BlockMath math="3x + 5 = 4" className="text-2xl mb-1" />
                  <div className="text-lg">
                    Basic Algebra
                    <div>
                      <span className="text-gray-600">Foundational</span>
                    </div>
                  </div>
                </>
              }
              {index === 2 &&
                <>
                  <InlineMath math="x = \frac{{-b \pm \sqrt{{b^2 - 4ac}}}}{{2a}}" className="text-2xl mt-2 mb-1" />
                  <div className="text-lg">
                    Intermediate Algebra
                    <div>
                      <span className="text-gray-600">Intermediate</span>
                    </div>
                  </div>
                </>
              }
              {index === 3 &&
                <>
                  <BlockMath math="\int_{a}^{b} f(x) \, dx = F(b)" className="text-2xl mb-1" />
                  <div className="text-lg">
                    Calculus
                    <div>
                      <span className="text-gray-600">Advance</span>
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
