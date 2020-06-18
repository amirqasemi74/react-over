import React from "react";
import { useStore } from "react-over";
import { ToDoStore } from "./toDo.store";
import ToDoItem from "./ToDoItem";
import styled from "styled-components";

const ToDoList = () => {
  const vm = useStore(ToDoStore);
  return (
    <ToDoListWrapper>
      {vm.todos.map((item, i) => (
        <ToDoItem key={i} itemIndex={i} />
      ))}
    </ToDoListWrapper>
  );
};

export default ToDoList;

const ToDoListWrapper = styled.div`
  text-align: left;
`;
