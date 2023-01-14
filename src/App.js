import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Result from './components/Result';
import rootReducer from './redux/reducers';

function App() {
  // const [num, setNum] = useState(0);

  // // cara menerima data dari redux aka store
  // const { total } = useSelector((counterState) => counterState);
  // console.log(total)

  // const increaseValue = () => {
  //   setNum(num + 1)
  // }
  // const decreaseValue = () => {
  //   setNum((n) => n - 1)
  // }

  // dibawah ini cara memanggil satu per satu DRY
  // const {total} = useSelector((rootReducer) => rootReducer.counterReducer);

  const {authReducer, counterReducer} = useSelector((rootReducer) => rootReducer);

  const dispatch = useDispatch();

  const handleAdd = () => {
    let newTotal = counterReducer.total + 1;

    dispatch({
      type: 'TAMBAH',
      payload: newTotal,
    });
  };

  const handleMin = () => {
    let newTotal = counterReducer.total - 1;

    dispatch({
      type: 'KURANG',
      payload: newTotal,
    });
  };

  console.log(authReducer.isLogin, counterReducer.total)

  return (
    // <div className="App">
    //   <button onClick={increaseValue}>+</button>
    //   <button onClick={decreaseValue}>-</button>
    //   <h1>{num}</h1>
    //   <Result />
    // </div>
    <div className='App'>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleMin}>-</button>
      <h1>{counterReducer.total}</h1>
      <p>{authReducer.isLogin ? 'anda sudah login' : 'silahkan login'}</p>
    </div>
  );
}

export default App;
