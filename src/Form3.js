import React from 'react';

const Form3 = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <div style={{ flexShrink: 0 }}>
                <lord-icon
                    src="https://cdn.lordicon.com/biobqpgs.json"
                    trigger="loop"
                    delay="1000"
                    style={{ width: '270px', height: '270px' }}
                >
                </lord-icon>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '0px' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>You are at the right place</h1>
                <p style={{ fontSize: '1.5rem', lineHeight: '1.5', margin: '0' }}>Brilliant gets you hands-on to help improve your professional skills and knowledge. You will interact with concepts, solve fun problems, and explore various topics in math and computer science.</p>
                <p style={{ fontSize: '1.5rem', lineHeight: '1.5', margin: '0', marginTop: '0px' }}>Our platform provides interactive learning experiences and opportunities to collaborate peers around the world.</p>
                <p style={{ fontSize: '1.8rem', margin: '20px' }}>
                    <b>
                        Join us today and unlock full potential in your academic and professional journey!
                    </b>
                </p>
            </div>
        </div>
    );
};

export default Form3;
