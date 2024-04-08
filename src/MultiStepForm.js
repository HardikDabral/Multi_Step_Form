import React, { useState } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';
import Form6 from './Form6';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);

    const handleContinue = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    // Calculate progress percentage
    const progress = (step - 1) * (100 / 5);

    const renderFormStep = () => {
        switch (step) {
            case 1:
                return <Form1 />;
            case 2:
                return <Form2 />;
            case 3:
                return <Form3 />;
            case 4:
                return <Form4 />;
            case 5:
                return <Form5 />;
            case 6:
                return <Form6 />;
            default:
                return null;
        }
    };

    return (
        <div>
            {/* Loading bar with carousel */}
            <div style={{ position: 'relative', marginTop: '20px', marginBottom: '20px' }}>
                {/* Loading bar */}
                <div
                    className={step > 1 ? 'back_btn' : ''}
                    onClick={step > 1 ? handlePrevious : null}
                    style={{
                        maxWidth: '80%',
                        width: '90%',
                        backgroundColor: '#f0f0f0',
                        height: '6px',
                        position: 'absolute',
                        left: '50%',
                        top: '0', 
                        transform: 'translateX(-50%)',
                    }}
                >
                    <div style={{ backgroundColor: '#007bff', height: '100%', width: `${progress}%` }} />
                </div>
            </div>

            {/* Render current form step */}
            <div style={{ textAlign: 'center', marginTop: '20px' }} className="first_component"  >
                {renderFormStep()}
            
            </div>

            {/* Continue button */}
            <div style={{ textAlign: 'center', marginTop: '20px' , marginBottom: '20px' }}>
                {step < 6 && (
                    <button
                        onClick={handleContinue}
                        style={{
                            width: '150px',
                            padding: '10px 20px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s',
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
                    >
                        Continue
                    </button>
                )}
            </div>
        </div>
    );
};

export default MultiStepForm;
