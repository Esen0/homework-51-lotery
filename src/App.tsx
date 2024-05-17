import React, {useState} from 'react';
import Ball from './components/Ball/Ball';
import './App.css';

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const generateNumbers = () => {
    let newNumbers: number[] = [];
    while(newNumbers.length < 5) {
      const number = Math.floor(Math.random() * 32) + 5;
      if(!newNumbers.includes(number)) {
        newNumbers.push(number);
      }
    }
  newNumbers.sort((a, b) => a - b);
  setNumbers(newNumbers); 
  }

  return (
    <div className='App'>
      <div className="balls">
        {numbers.map((number) => ( 
          <Ball key={number} number={number} />
        ))}
      </div>
      <button onClick={generateNumbers}>New numbers</button>
    </div>
  );
};

export default App;
