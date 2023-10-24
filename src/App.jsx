import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Cards from "./pages/Cards";
import ReduxExample from "./pages/ReduxExample";
import RecipesList from "./pages/RecipesList";
import ScientistList from "./pages/ScientistList";
import ProductTableExample from "./pages/ProductTableExample";
import ConsecutiveChar from "./pages/ConsecutiveChar";
import ExchangeApp from "./pages/ExchangeApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cards" element={<Cards />} />
        <Route path="redux-example" element={<ReduxExample />} />
        <Route path="recipes-list" element={<RecipesList />} />
        <Route path="scientist-list" element={<ScientistList />} />
        <Route path="product-table" element={<ProductTableExample />} />
        <Route path="consecutive-char" element={<ConsecutiveChar />} />
        <Route path="exchange" element={<ExchangeApp />} />
      </Routes>
    </Router>
  );
}

export default App;
