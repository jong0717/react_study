// import { RecoilRoot } from 'recoil';
import './App.css';
import CharacterCounter from './components/ZustandExample/CharacterCounter';
import CurrentUserInfo from './components/ZustandExample/CurrentUserInfo';
// import CurrentUserInfo from './components/RecoilExample/CurrentUserInfo';
import Text from './components/ZustandExample/Text';
import TodoList from './components/ZustandExample/Todo/TodoList';
// import CharacterCounter from './components/RecoilExample/CharacterCounter';
// import FontButton from './components/RecoilExample/FontButton';
// import Text from './components/RecoilExample/Text';
// import TodoList from './components/RecoilExample/Todo/TodoList';
// import TestMocking from './components/TestMocking';
// import Counter from './features/counter/Counter';
// import Counter2 from './components/Counter2';
// import MobxExample from './components/MobxExample';
// import TodoList from './components/TodoList';
// import {observableTodoStore} from './app/ObservableTodoStore';

function App() {
  return (
    <div className="App">
      {/* <TestMocking />
      <Counter />
      <br />
      <br /> */}
      {/* <Counter2 /> */}
      {/* <MobxExample /> */}
      {/* <TodoList store={observableTodoStore}/> */}
      {/* <RecoilRoot> */}
        {/* <FontButton />
        <Text />
        <CharacterCounter /> */}
        {/* <TodoList /> */}
        {/* <CurrentUserInfo /> */}
      {/* </RecoilRoot> */}
      <Text />
      <CharacterCounter />
      <TodoList />
      <CurrentUserInfo />
    </div>
  );
}

export default App;
