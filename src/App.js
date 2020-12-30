import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

// // code splitting
// const Details = lazy(() => import("./Details"));
// const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const themeHook = useState("darkBlue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          {/* <Suspense fallback={<h1>loading route..</h1>}> */}
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
          {/* </Suspense> */}
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
