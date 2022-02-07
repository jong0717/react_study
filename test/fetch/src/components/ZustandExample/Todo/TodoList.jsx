import React from "react";
// import { useRecoilValue } from "recoil";
import TodoItemCreator from "./TodoItemCreater";
import TodoItem from "./TodoItem";
import { useStore } from "./TodoStore";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

export default function TodoList() {
  const todoList = useStore((state) => state.filteredTodoListState());

  return (
    <>
      <TodoListStats />
      <TodoListFilters /> 
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
