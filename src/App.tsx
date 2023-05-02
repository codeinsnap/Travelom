import React from "react";
import MainRouter from "./router/Router";
import NavigationBar from "./component/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <MainRouter/>
    </div>
  );
}

export default App;
