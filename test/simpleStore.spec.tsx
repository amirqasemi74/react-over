import { render } from "@testing-library/react";
import React from "react";
import { connectToStore, ContextualStore, useStore } from "react-over";

describe("", () => {
  it("store hav value", () => {
    @ContextualStore()
    class UserStore {
      username = "amir.qasemi74";
      password = "123456";
    }

    const App = () => {
      const vm = useStore(UserStore);
      return (
        <div>
          username: {vm.username}
          password: {vm.password}
        </div>
      );
    };
    const AppWithStore = connectToStore(App, UserStore);
    const { debug } = render(<AppWithStore />);
  });
});
