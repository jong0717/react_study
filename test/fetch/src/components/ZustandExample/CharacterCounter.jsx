import React from "react";
// import create from 'zustand';
import {useCountStore} from './store';

export default function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [ text, setText ] = useCountStore((state) => [
    state.textState,
    state.setTextState,
  ])

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

function CharacterCount() {
    const count = useCountStore((state) => state.textState.length)
  
    return <>Character Count: {count}</>;
  }