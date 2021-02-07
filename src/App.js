import React from "react";
import {Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Dictionary from "./components/Dictionary";
// import Thesaurus from "./components/Thesaurus";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/dictionary">
          <Dictionary />
        </Route>
        {/* <Route path="/thesaurus">
          <Thesaurus />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
