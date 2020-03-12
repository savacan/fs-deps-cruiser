import * as React from "react";
import * as ReactDOM from "react-dom";

const App: React.FC = () => {
  return <div>hello world.</div>;
};

const el: HTMLElement | null = document.getElementById("app");
el && ReactDOM.render(<App />, el);
