import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hoge } from "./interface/test";

const hoge: Hoge = {
  title: "Hello Happy World!"
};

const App: React.FC = () => {
  return <div>{hoge}</div>;
};

const el: HTMLElement | null = document.getElementById("app");
el && ReactDOM.render(<App />, el);
