import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Result from './components/Result';
import rootReducer from './redux/reducers';
import { handleAdd, handleMin } from './redux/actions/counterAction';

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

  const onAdd = () => {
    dispatch(handleAdd(counterReducer))
  }

  const onMin = () => {
    dispatch(handleMin(counterReducer))
  }

  console.log(authReducer.isLogin, counterReducer.total)

  return (
    // <div className="App">
    //   <button onClick={increaseValue}>+</button>
    //   <button onClick={decreaseValue}>-</button>
    //   <h1>{num}</h1>
    //   <Result />
    // </div>
    <div className='App'>
      <button onClick={onAdd}>+</button>
      <button onClick={onMin}>-</button>
      <h1>{counterReducer.total}</h1>
      <p>{authReducer.isLogin ? 'anda sudah login' : 'silahkan login'}</p>
    </div>
  );
}

export default App;
