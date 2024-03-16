import React, { useState, useRef, useEffect } from 'react';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const calculateResult = () => {
      try {
        const result = eval(expression);
        if (!isNaN(result)) {
          inputRef.current.value = result;
        }
      } catch (error) {
        inputRef.current.value = 'Error';
      }
    };

    calculateResult();
  }, [expression]);

  const handleInputChange = (event) => {
    setExpression(event.target.value);
  };

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const clearInput = () => {
    setExpression('');
    inputRef.current.value = '';
  };

  return (
    <div>
      <input type="text" ref={inputRef} readOnly />
      <br />
      <button onClick={() => handleButtonClick('1')}>1</button>
      <button onClick={() => handleButtonClick('2')}>2</button>
      <button onClick={() => handleButtonClick('3')}>3</button>
      <button onClick={() => handleButtonClick('+')}>+</button>
      <br />
      <button onClick={() => handleButtonClick('4')}>4</button>
      <button onClick={() => handleButtonClick('5')}>5</button>
      <button onClick={() => handleButtonClick('6')}>6</button>
      <button onClick={() => handleButtonClick('-')}>-</button>
      <br />
      <button onClick={() => handleButtonClick('7')}>7</button>
      <button onClick={() => handleButtonClick('8')}>8</button>
      <button onClick={() => handleButtonClick('9')}>9</button>
      <button onClick={() => handleButtonClick('*')}>*</button>
      <br />
      <button onClick={() => handleButtonClick('0')}>0</button>
      <button onClick={() => handleButtonClick('.')}>.</button>
      <button onClick={() => clearInput()}>C</button>
      <button onClick={() => handleButtonClick('/')}>/</button>
      <br />
      <button onClick={() => handleButtonClick('(')}>(</button>
      <button onClick={() => handleButtonClick(')')}>)</button>
      <button onClick={() => handleButtonClick('%')}>%</button>
      <button onClick={() => handleButtonClick('^')}>^</button>
      <br />
    </div>
  );
};

export default Calculator;
