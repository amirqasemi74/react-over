import React from "react";
import ToDos from "./toDos";
import { connectStore, useStore } from "react-over";
import ThemeStore from "./theme.store";

const App = () => {
  const vm = useStore(ThemeStore);
  return (
    <>
      <button onClick={vm.changePrimary}>change theme</button>
      <ToDos />
    </>
  );
};

export default connectStore(App, ThemeStore);