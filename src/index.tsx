import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

// Tell Typescript that there is a global variable called module - see below
declare var module: { hot: any };

const appRender = () => {
  const App = require("containers/App").default
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById("app")
  )
}
appRender();
if (module.hot) {
  module.hot.accept("./containers/App", () => { appRender() });
}