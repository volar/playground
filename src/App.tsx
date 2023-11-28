import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Cards from './pages/Cards';
import ReduxExample from './pages/ReduxExample';
import RecipesList from './pages/RecipesList';
import ScientistList from './pages/ScientistList';
import Examples from './pages/Examples';
import StringTools from './pages/StringTools';
import Profile from './pages/Profile';
import Todo from './pages/Todo';
import NpiApiSearch from './pages/NpiApiSearch';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cards" element={<Cards />} />
        <Route path="redux-example" element={<ReduxExample />} />
        <Route path="recipes-list" element={<RecipesList />} />
        <Route path="scientist-list" element={<ScientistList />} />
        <Route path="examples" element={<Examples />} />
        <Route path="consecutive-char" element={<StringTools />} />
        <Route path="todo" element={<Todo />} />
        <Route path="npi-api-search" element={<NpiApiSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
