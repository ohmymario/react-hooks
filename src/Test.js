import React, { useState } from 'react';

const Test = () => {

  const [state, setstate] = useState(0)

  const handleClick = (e) => {
    console.log(e)
    setstate(prevState => prevState + 1)
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleClick}>Add 1 to {state}</button>
    </div>
  )
}

export default Test;
