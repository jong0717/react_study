# React

## OT

coding - run - deploy

어떻게 하면 강사로부터 빨리 독립할 수 있는가..!

> 공식문서에 익숙해져라..! 



## 개발환경 셋팅

1. node 설치

2. create-react-app 설치

   - npm install -g create-react-app

     - version 확인 : create-react-app -V

   - npx create-react-app

     : 그때만 설치해서 react를 사용하는 것.

3. mac vs windows

   - 디렉토리 만들기
   - create-react-app . (기본 앱 셋팅)

   - npm run start(실행)

## 리액트 학습

1. 구조파악

- public / index.html : id = "root"

- src 파일을 통해 개발(기본구조는 vue와 동일)
- 진입 > src / index.js
- App.js > class 형태로, 그리고 div하나는 있어야함.

2. react에서 css 수정하기

- index.js >> import index.css
- App.css 

3. 배포

- npm run build
- npx serve -s build(임시서버?) >> 용량차이가 큼

4. 컴포넌트로 분리해주는것..!!!(장점쓰)

- vue와 유사한 방식으로 분리해주면됨!!



### state와 props

- state : props값에 따라 내부에 필요한 데이터.? 컴포넌트 내부적으로 작동하는 거..? / 정보?

- props : 사용자가 컴포넌트를 사용하는 입장에서 중요

- state나 props가 바뀌면 render함수가 다시 호출됨. >> 그럼 밑에 컴포넌트 안의 render도 다시 호출되면서 

  웹사이트를 다시 그림
  
- 하위 컴포넌트가 상위 컴포넌트를 명령할때는 event를 통해서 한다.

- 상위 컴포넌트가 하위 컴포넌트를 명령할때는 props를 통해 전달.

### redux

- store를 통해 다 저장해서 가져다 씀.

### this

- 함수에 안묶여짐..!! >> bind 필요!!

### setState

- 동적으로 처리할때 this.state.mode = 'welcome' 해버리면 리액트가 인식을 못함
- this.setState(객체) 형태로 하여 바꿔줘야함 >> this.setState({mode:'welcome'})

```react
// this.state.mode = 'welcome';
// 위의 코드는 두가지 문제를 일으킴 bind(this)필요, setState필요
```



