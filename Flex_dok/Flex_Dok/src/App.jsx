import React, { useState } from "react";
import styles from "./style";
import { RightClickMenu,Editor , Review_Title, Contact_test, ContactSection, How_Use, Video_use, StartEdit, Billing, Adventages, Start_Edit, Business, Footer, Navbar, Stats, Testimonials, Hero, Title1, Title_Adventages, Title_Contact } from "./components";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

const App = () => {
  // State variable to track if the light version is active
  const [lightMode, setLightMode] = useState(false);

  // Function to toggle light mode
  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <div className={`bg-${lightMode ? 'white' : 'primary'} w-full overflow-hidden`}>
      {/* Navbar Section */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-${lightMode ? 'white' : 'primary'} ${styles.flexStart}`}>
        {/* Hero the Section that contains the GIF and the Description */}
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-${lightMode ? 'white' : 'primary'} ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* All the left Sections */}
          {/* <RightClickMenu/> */}
          <Stats />
          <Business />
          <Title_Adventages />
          <Adventages />
          <Start_Edit />
          <StartEdit />
          <How_Use />
          <Video_use />
          <Review_Title />
          <Testimonials />
          <Billing />
          <Title_Contact />
          <Contact_test />
          <Footer />
        </div>
      </div>

      {/* Button to toggle light mode */}
      {/* <button className="fixed bottom-4 right-4 bg-blue-800 text-white px-4 py-2 rounded-md" onClick={toggleLightMode}>
        {lightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button> */}
    </div>
  );
};

export default App;
