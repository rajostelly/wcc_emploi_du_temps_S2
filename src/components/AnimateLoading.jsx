import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "../css/AnimateLoading.css"; // Replace with the path to your CSS file

const MyComponent = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="my-component-container">
    {showSpinner && (
        
      <div className="searchLoader">
        <p>Welcome!</p>
        
        <FontAwesomeIcon
          icon={faSpinner}
          className="spinner"
          style={{ color: "##0e1140" }}
        />
      </div>
    )}
    {!showSpinner && (
      <>
        {/* Render your other components here */}
      </>
    )}
  </div>
  );
};

export default MyComponent;
