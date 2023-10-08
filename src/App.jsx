import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Cards from "./pages/Cards";
import ReduxExample from "./pages/ReduxExample";
import RecipesList from "./pages/RecipesList";
import List from "./pages/List";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cards" element={<Cards />} />
        <Route path="redux-example" element={<ReduxExample />} />
        <Route path="recipes-list" element={<RecipesList />} />
        <Route path="list" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
