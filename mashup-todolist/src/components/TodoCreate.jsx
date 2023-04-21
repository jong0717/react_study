import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { MdAdd } from 'react-icons/md'

const CircleBtn = styled.button`
  background: #38d9a9;
  &:hover{
    background: #63e6be;
  }
  &:active{
    background: #20c997;
  }
  position: absolute;
  left: 50%;
  bottom:0;
  z-index:5;
  cursor: pointer;
  width:80px;
  height:80px;
  display: flex;
  justify-content:center;
  align-items:center;
  font-size: 60px;
  transform: translate(-50%, 50%);
  color: #fff;
  border-radius: 50%;
  border:none;
  outline:none;
  transition: 0.125s all ease-in;
  ${props => props.open &&
  css`
    background: #ff6b6b;
    &:hover{
      background: #ff8787;
    }
    &:active{
      background: #fa5252;
    }
    transform: translate(-50%, 50%) rotate(45deg);
  `}
`

const InsertFromPositioner = styled.div`
  width:100%;
  position: absolute;
  bottom:0;
  left:0;
`

const InsertForm = styled.div`
  padding:32px 32px 72px;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  border-radius: 0 0 16px 16px;
`

const Input = styled.input`
  padding:12px;
  border-radius: 4px;
  width: 100%;
  border: 1px solid #dee2e6;
  outline:none;
  font-size: 18px;
  box-sizing: border-box;
`
export default function TodoCreate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  return (
    <>
      {open && (
        <InsertFromPositioner>
          <InsertForm>
            <Input autoFocus placeholder='할 일을 입력 후, Enter 를 누르세요' />
          </InsertForm>
        </InsertFromPositioner>
      )}
      <CircleBtn onClick={onToggle} open={open}>
        <MdAdd />
      </CircleBtn>
    </>
  )
}