# React

## 21.07.13

### OT

coding - run - deploy

어떻게 하면 강사로부터 빨리 독립할 수 있는가..!

> 공식문서에 익숙해져라..! 



### 개발환경 셋팅

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

### 리액트 학습

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



#### state와 props

- state : props값에 따라 내부에 필요한 데이터.? 컴포넌트 내부적으로 작동하는 거..? / 정보?

- props : 사용자가 컴포넌트를 사용하는 입장에서 중요

- state나 props가 바뀌면 render함수가 다시 호출됨. >> 그럼 밑에 컴포넌트 안의 render도 다시 호출되면서 

  웹사이트를 다시 그림
  
- 하위 컴포넌트가 상위 컴포넌트를 명령할때는 event를 통해서 한다.

- 상위 컴포넌트가 하위 컴포넌트를 명령할때는 props를 통해 전달.

#### redux

- store를 통해 다 저장해서 가져다 씀.

#### this

- 함수에 안묶여짐..!! >> bind 필요!!

#### setState

- 동적으로 처리할때 this.state.mode = 'welcome' 해버리면 리액트가 인식을 못함
- this.setState(객체) 형태로 하여 바꿔줘야함 >> this.setState({mode:'welcome'})

```react
// this.state.mode = 'welcome';
// 위의 코드는 두가지 문제를 일으킴 bind(this)필요, setState필요
```



## 21.07.14

### React 공부

#### 1. props와 state

- props : 부모에서 자식컴포넌트로 값을 전달해서 자식 컴포넌트에서 사용할 때 사용. 읽기전용, 값 변경이 자식 컴포넌트내에서 불가능하다.
- state : 컴포넌트 내부에서 값을 설정해주고 사용, 변경하고 싶을땐 setState를 통해 변경해준다.

> 만약, 하위 컴포넌트에서 상위 컴포넌트의 값을 변경하고 싶다면! 상위컴포넌트에서 값을 바꾸는 함수를 생성하고 하위 컴포넌트로 함수를 전달해서 변경할 수 있다.



#### 2. LifeCycle

![image-20210714150328604](C:\Users\PC\Documents\react-app\studymd.assets\image-20210714150328604.png)

##### 1) Mounting(생성될때)

- constructor : 생성자함수(컴포넌트가 처음 브라우저 상에 나타나게 될때, 만들어지는 과정에서 가장 먼저 실행되는 함수)  >> state 초기화, 컴포넌트 생성 전 해야할 작업이 있을 때 사용

- getDerivedStateFromProps : props로 받은 값을 state로 동결시킬때..?(updating에서도 사용한다.)

- render : 어떤 DOM을 만들지, 내부 태그에 어떤 값을 전달할지

- componentDidMount : 실제로 브라우저 상에 나타나게 되면 호출, 외부 라이브러리, 차트라이브러리 사용할때 특정 돔에 차트를 그려주세요, 네트워크 요청(API, AJAX 요청)할때 사용, 나타나고 난 시점에 어떤일들을 하겠다(이벤트 리스닝, api 요청)

  ```
  // 외부 라이브러리 연동: D3, masonry, etc
  // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
  // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
  ```

  

##### 2) Updating(props와 state 값이 갱신될때)

- getDerivedStateFromProps : props로 받은 값을 state로 동기화시킬때(mounting에서도 사용)

  ```react
  static getDerivedStateFromProps(nextProps, prevState) {
    // 여기서는 setState 를 하는 것이 아니라
    // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
    // 사용됩니다.
    /*
    if (nextProps.value !== prevState.value) {
      // state값을 props로 동기화    
      return { value: nextProps.value };
    }
    // 값의 변화가 없다면 null..
    return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
    */
  }
  
  static 값으로 넣어줘야한다.?
  ```

  

- shouldComponentUpdate : 매우 중요!! / 컴포넌트가 업데이트 되는 성능을 최적화시키고 싶을때 사용 / true(rendering), false(not rendering) 반환, 버츄얼 돔에 렌더링 할지말지 결정하는 함수 >> 업데이트를 막아주는 함수로 기억(특정조건에 따라 렌더링을 막아줄 수 있는 함수). 

  ```react
  shouldComponentUpdate(nextProps, nextState) {
    // return false 하면 업데이트를 안함
    // return this.props.checked !== nextProps.checked
    return true;
  }
  shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.value === 10) return false;
      return true;
    }
  // 이케하면 10은 패스하고 한번더 눌러야 11로 넘어감. 값만 바뀌고 렌더링이 안된것.
  ```

- getSnashotBeforeUpdate : rendering 후에 결과물이 브라우저 상에 반영되기 바로 직전에 호출되는 함수 / 렌더링 하고 나서 업데이트 하기전에 스크롤의 위치, 해당 돔의 크기를 사전에 가져오고 싶을때...

  ```react
   getSnapshotBeforeUpdate(prevProps, prevState) {
      // DOM 업데이트가 일어나기 직전의 시점입니다.
      // 새 데이터가 상단에 추가되어도 스크롤바를 유지해보겠습니다.
      // scrollHeight 는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
      // scrollTop 은, 이 기능이 크롬에 이미 구현이 되어있는데, 
      // 이미 구현이 되어있다면 처리하지 않도록 하기 위함입니다.
      if (prevState.array !== this.state.array) {
        const {
          scrollTop, scrollHeight
        } = this.list;
  
        // 여기서 반환 하는 값은 componentDidMount 에서 snapshot 값으로 받아올 수 있습니다.
        return {
          scrollTop, scrollHeight
        };
      }
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      if (snapshot) {
        const { scrollTop } = this.list;
        if (scrollTop !== snapshot.scrollTop) return; // 기능이 이미 구현되어있다면 처리하지 않습니다.
        const diff = this.list.scrollHeight - snapshot.scrollHeight;
        this.list.scrollTop += diff;
      }
    }
  
  
  ```

  

- componentDidUpdate : 작업 후 업데이트 되고 나서 호출되는 함수 / state가 바꼈다 >> 이전의 상태와 지금의 상태가 페이지가 바뀐 것에 대한 작업가능

##### 3) Unmounting(제거될때)

- componentWillUnmount : componentDidMount에서 설정한 리스너를 없애는 함수



##### 4) 컴포넌트에 에러 발생

- componentDidCatch : 만약에 에러가 발생하면 잡아줄때 호출 / 사용자에게는 메시지를 통해 상황을 알리고, 개발자에게는 에러 정보를 전달하는 함수. 

  > 중요 : error가 발생하는 컴포넌트의 부모 컴포넌트에 함수를 작성해서 처리한다.

## 21.07.15

### LifeCycle

![image-20210715105937423](C:\Users\PC\Documents\react-app\studymd.assets\image-20210715105937423.png)

- 직접 만들어본 라이프사이클 흐름

![image-20210715131016914](C:\Users\PC\Documents\react-app\studymd.assets\image-20210715131016914.png)

