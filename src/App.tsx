import React, { Suspense } from "react";
import NavigationBar from "./component/NavigationBar/NavigationBar";
import Footer from "./component/footer/Footer";
import Router from "./router/Router";
import { flashPage } from './component/flashPage'
function App() {
  return (
    <div className="App">
      <Suspense fallback={flashPage()}>
          <NavigationBar />
        <Router />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
