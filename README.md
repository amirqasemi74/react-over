# React Store

**React Store** is a library for better state managment in react hooks new world.

It facilitates to split components into smaller and maintainable ones then share `States` between them.
Also it covers shortcomings of react hooks (believe me!) and let developers to use `class`es to manage their components logic, use it's IOC container and ...

This library uses react `Context API` and typescript decorators to make a better react applications.

#### Usage

First install core library:

`yarn add @react-store/core` or `npm i @react-store/core`

then enable **decorators** in typescript:

```json
{
  "compilerOptions": {
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
}
```

Now it's ready. First create a `store`:

```ts
// user.store.ts
import { Store } from "@react-store/core";

@Store()
export class UserStore {
  name: string;

  onNameChange(e: ChangeEvent) {
    this.name = e.target.value;
  }
}
```

Then connect it to the component **tree** by using `connectStore`:

```tsx
// App.tsx
import { connectToStore, useStore } from "@react-store/core";

interface Props {
  p1: string;
}

function App(props: Props) {
  const st = useStore(UserStore);
  return (
    <div>
      {st.name}
      <Input />
    </div>
  );
}
export default connectToStore(App, UserStore);
```

And enjoye to use store in child components by `useStore` hook. pass it **store class** as first parameter:

```jsx
import { useStore } from "@react-store/core";

export default function Input() {
  const st = useStore(UserStore);
  return (
    <div>
      <span>Name is: </span>
      <input onChange={st.onNameChange} />
    </div>
  );
}
```

#### Store property & method

- _Property_: Each store property can act like piece of component state and mutating their values will rerender _all_ store users as react context API works. Also in more precise way you can declare _dependencies_ for each user of store to prevent additional rendering and optimization purposes. we will talk about more.

- _Method_: Store methods like Redux actions uses for state mutations. A good practice is to write logics and state mutation codes inside store class methods and use them in components. as you will guess directly mutating state from components will be a bad practice.
Store methods are bound to store class instance by default. feel free to use them like below:

```tsx
function Input() {
  const st = useStore(UserStore);
  return <input onChange={st.onNameChange} />;
}
```

#### Props in store

To have parent component props (the component directly connected to store by using `connectStore` function) inside store class use `@Props`:

```ts
// user.store.ts
import { Store, Props } from "@react-store/core";
import { Props as AppProps } from "./App";

@Store()
export class UserStore {
  @Props()
  props: AppProps;
}
```
