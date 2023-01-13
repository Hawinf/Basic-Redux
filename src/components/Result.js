import React from 'react'
import { useSelector } from 'react-redux';

const Result = () => {
    // useSelector memanggil state yang berasal dari state>> reducer>> state
    const { total } = useSelector((state) => state);
    console.log(total)

  return (
    <div className='result-wrapper'>
        <h1>This is The Result Page</h1>
        <h5>{total}</h5>
    </div>
  )
}

export default Result
