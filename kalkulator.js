import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(expression);
        setExpression(result.toString());
      } catch (error) {
        setExpression('Error');
      }
    } else {
      setExpression(prevExpression => prevExpression + value);
    }
  };

  const clearInput = () => {
    setExpression('');
  };

  return (
    <View>
      <TextInput value={expression} editable={false} />
      <View style={{ flexDirection: 'row' }}>
        <Button title="1" onPress={() => handleButtonClick('1')} />
        <Button title="2" onPress={() => handleButtonClick('2')} />
        <Button title="3" onPress={() => handleButtonClick('3')} />
        <Button title="+" onPress={() => handleButtonClick('+')} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button title="4" onPress={() => handleButtonClick('4')} />
        <Button title="5" onPress={() => handleButtonClick('5')} />
        <Button title="6" onPress={() => handleButtonClick('6')} />
        <Button title="-" onPress={() => handleButtonClick('-')} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button title="7" onPress={() => handleButtonClick('7')} />
        <Button title="8" onPress={() => handleButtonClick('8')} />
        <Button title="9" onPress={() => handleButtonClick('9')} />
        <Button title="*" onPress={() => handleButtonClick('*')} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button title="C" onPress={clearInput} />
        <Button title="0" onPress={() => handleButtonClick('0')} />
        <Button title="." onPress={() => handleButtonClick('.')} />
        <Button title="/" onPress={() => handleButtonClick('/')} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button title="=" onPress={() => handleButtonClick('=')} />
      </View>
    </View>
  );
};

export default Calculator;