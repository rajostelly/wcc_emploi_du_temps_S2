import React, { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Footer from './components/footer'
import MyComponent from "./components/AnimateLoading";

function App() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="App">
      {showSpinner ? (
        <MyComponent />
      ) : (
        <>
          <LandingPage />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
