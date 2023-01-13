import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Result from './components/Result';

function App() {
  const [num, setNum] = useState(0);

  // cara menerima data dari redux aka store
  const { total } = useSelector((counterState) => counterState);
  console.log(total)

  const increaseValue = () => {
    setNum(num + 1)
  }
  const decreaseValue = () => {
    setNum((n) => n - 1)
  }

  return (
    <div className="App">
      <button onClick={increaseValue}>+</button>
      <button onClick={decreaseValue}>-</button>
      <h1>{num}</h1>
      <Result />
    </div>
  );
}

export default App;
