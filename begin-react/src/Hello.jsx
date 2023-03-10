import React from 'react'

export default function Hello({color, name, isSpecial}) {
  return (
    <h1 style={{color, name, isSpecial}}>
      { isSpecial && <strong>*</strong>}
      안녕하세요, {name}
      </h1>
  )
}

// props 없을때 기본값설정
Hello.defaultProps = {
  name: '이름없음'
}
