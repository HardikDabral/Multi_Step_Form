import React from 'react';

const Form5 = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,padding: '25px'}}>
            <div style={{ marginTop: '-30px', marginBottom: '10px', flexShrink: 0 }}>
                <lord-icon
                    src="https://cdn.lordicon.com/pgmktfgp.json"
                    trigger="loop"
                    delay="2000"
                    state="morph-open"
                    style={{ width: '320px', height: '320px' }}
                >
                </lord-icon>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '0px' }}>
                  <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>You are on your way!</h1>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                      {[...Array(5)].map((_, index) => (
                          <lord-icon
                              key={index}
                              src="https://cdn.lordicon.com/xjronrda.json"
                              trigger="loop"
                              delay="500"
                              style={{ width: '60px', height: '60px', marginRight: '10px' }}
                          >
                          </lord-icon>
                      ))}
                  </div>
                <p style={{ fontSize: '1.5rem', lineHeight: '1.5', margin: '0' }}>
                    "Through its engaging and well-structured courses, Brilliant has taught me mathematics concepts that I previously struggled to understand. Now I feel confident approaching both technical job interviews and real-world problem-solving situations!"
                </p>
                <p style={{ fontSize: '1.5rem', lineHeight: '1.5', margin: '0', marginLeft: '40px' }}>
                    - Jacob S.
                </p>
            </div>
        </div>
    );
};

export default Form5;
