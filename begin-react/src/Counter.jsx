import React, {useState} from 'react'

export default function Counter() {
  const wrapper = {
    margin:'0 0 0 100px',
  }
  const [num, setNum] = useState(0);
  const onIncrease = () => {
    setNum(prevNum => prevNum + 1);
  }
  const onDecrease = () => {
    setNum(prevNum => prevNum - 1);
  }
  return (
    <div style={wrapper}>
      <h1>{num}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}
