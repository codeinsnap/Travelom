import React from "react";
import MainRouter from "./router/Router";
import NavigationBar from "./component/NavigationBar";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <MainRouter/>
      <Footer/>
    </div>
  );
}

export default App;
