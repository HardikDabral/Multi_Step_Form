import React from 'react';

const Form5 = () => {
    return (
        <div className="flex flex-col items-center p-6">
            <div className="mt-[-30px]">
                <lord-icon
                    src="https://cdn.lordicon.com/pgmktfgp.json"
                    trigger="loop"
                    delay="2000"
                    state="morph-open"
                    style={{ width: '320px', height: '320px' }}
                >
                </lord-icon>
            </div>
            <div className="text-center mb-0">
                  <h1 className="text-5xl mb-2">You are on your way!</h1>
                  <div className="flex justify-center mb-10">
                      {[...Array(5)].map((_, index) => (
                          <lord-icon
                              key={index}
                              src="https://cdn.lordicon.com/xjronrda.json"
                              trigger="loop"
                              delay="500"
                              style={{ width: '50px', height: '50px' }}
                          >
                          </lord-icon>
                      ))}
                  </div>
                <p className="text-xl leading-6 mb-2">
                    "Through its engaging and well-structured courses, Brilliant has taught me mathematics concepts that I previously struggled to understand. Now I feel confident approaching both technical job interviews and real-world problem-solving situations!"
                </p>
                <p className="text-2xl leading-6 ml-30">
                    - Jacob S.
                </p>
            </div>
        </div>
    );
};

export default Form5;
