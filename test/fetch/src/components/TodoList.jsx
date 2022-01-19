import { observer } from "mobx-react";
import { action, runInAction } from "mobx";

// observer가 store의 변화를 관찰
const TodoList = observer(({ store }) => {
  const onNewTodo = () => {
    store.addTodo(prompt("Enter a new todo:", "coffee plz"));
  };

  const run = () => {
    store.todos[0].completed = !store.todos[0].completed;
    store.todos[1].task = "Random todo " + Math.random();
    store.todos.push({ task: "Find a fine cheese", completed: true });
    // etc etc.. add your own statements here...
  };
  const load = () => {
    // action(() => {
    //   store.pendingRequests++;
    // })();
    // runinAction하면 action함수 실행하도록 안해도됨.
    runInAction(() => {
        store.pendingRequests++;
    })
    setTimeout(
      action(() => {
        store.addTodo("Random Todo " + Math.random());
        store.pendingRequests--;
      }),
      2000
    );
  };

  const fetchTodo = () => {
      store.fetchData();
  }
  return (
    <div>
      {store.report}
      <ul>
        {store.todos.map((todo, idx) => (
          <TodoView todo={todo} key={idx} />
        ))}
      </ul>
      {store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null}
      <button onClick={onNewTodo}>New Todo</button>
      <small> (double-click a todo to edit)</small>
      {/* <RenderCounter /> */}
      <button onClick={run}>run code</button>
      <button onClick={load}>load data</button>
      <button onClick={fetchTodo}>fetch data</button>

    </div>
  );
});

const TodoView = observer(({ todo }) => {
  const onToggleCompleted = () => {
    todo.completed = !todo.completed;
  };

  const onRename = () => {
    todo.task = prompt("Task name", todo.task) || todo.task;
  };

  return (
    <li onDoubleClick={onRename}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggleCompleted}
      />
      {todo.task}
      {todo.assignee ? <small>{todo.assignee.name}</small> : null}
      {/* <RenderCounter /> */}
    </li>
  );
});

// ReactDOM.render(
//   <TodoList store={observableTodoStore} />,
//   document.getElementById("reactjs-app")
// );

export default TodoList;
