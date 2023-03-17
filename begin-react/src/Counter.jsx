import React, { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'INCREASEMENT':
      return state + 1;
    case 'DECREASEMENT':
      return state - 1;
    default:
      return state;
  }
}


export default function Counter() {
  const wrapper = {
    margin:'0 0 0 100px',
  }
  // const [num, setNum] = useState(0);
  const [number, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => {
    // setNum(prevNum => prevNum + 1);
    dispatch({type: 'INCREASEMENT'});
  }
  const onDecrease = () => {
    // setNum(prevNum => prevNum - 1);
    dispatch({type: 'DECREASEMENT'});
  }
  return (
    <div style={wrapper}>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}
