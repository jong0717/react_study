import React, { useState, useRef } from 'react'

export default function InputSample() {
  // 상태 관리
  const [inputs, setInputs] = useState({
    name : '',
    nickname: '',
  });
  // 특정 DOM을 선택할때 useRef 사용
  const nameInput = useRef();
  // 객체 구조할당
  const {name, nickname} = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name] : value,
    })
  }

  const onReset = () => {
    setInputs({
      name:'',
      nickname:'',
    });
    nameInput.current.focus();
  }

  return (
    <div>
      <input placeholder='이름' name="name" onChange={onChange} value={name} ref={nameInput} />
      <input placeholder='닉네임' name="nickname" onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <strong>값: </strong>
        {name} ({nickname})
      </div>
    </div>
  )
}
