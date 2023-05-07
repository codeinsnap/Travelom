import React, { Suspense }  from "react";
import MainRouter from "./router/Router";
import NavigationBar from "./component/NavigationBar";
import Footer from "./component/footer/Footer";
import Router from './router/Router'
import { CircularProgress } from "@mui/material"
function App() {
  return (
    <div className="App">
      <Suspense fallback={<CircularProgress />}>
        <div style={{position:"absolute", width:"100%"}}>
        <NavigationBar />
        </div>
        <Router />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
