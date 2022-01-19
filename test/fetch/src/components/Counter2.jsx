import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {increament, decreament, increamentByAmount} from '../features/counter/counterSlice';

export default function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <button onClick={() => dispatch(increament())}>Increament</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decreament())}>Decreament</button>
                <button onClick={() => dispatch(increamentByAmount(5))}>+5</button>
            </div>
        </div>
    )
}
