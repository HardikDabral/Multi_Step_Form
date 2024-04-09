import React from 'react';

const Form3 = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <div className="flex-shrink-0">
                <lord-icon
                    src="https://cdn.lordicon.com/biobqpgs.json"
                    trigger="loop"
                    delay="1000"
                    style={{ width: '230px', height: '230px' }}
                >
                </lord-icon>
            </div>
            <div className="text-center mb-0">
                <h1 className="text-4xl mb-8">You are at the right place</h1>
                <p className="text-2xl leading-relaxed mb-4">Brilliant gets you hands-on to help improve your professional skills and knowledge. You will interact with concepts, solve fun problems, and explore various topics in math and computer science. Our platform provides interactive learning experiences and opportunities to collaborate with peers around the world.</p>
                <p className="text-2xl font-bold my-8">
                    Join us today and unlock full potential in your academic and professional journey!
                </p>
            </div>
        </div>
    );
};

export default Form3;
