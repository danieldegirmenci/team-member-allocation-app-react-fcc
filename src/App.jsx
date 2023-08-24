import * as React from 'react';
import './App.css';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Employees from "./Employees";
import Nav from "./Nav";
import NotFound from "./NotFound";
import { DataProvider } from "./context/DataContext"
import GroupedTeamMembers from "./GroupedTeamMembers"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {


  return (
    <DataProvider>
      <Router>
        <Nav />

        <Header />

        <Routes>
          <Route path="/" element={(<Employees />)} />
          <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers />} />
          <Route path="*" element={<NotFound />} />

        </Routes>

        <Footer />
      </Router>

    </DataProvider>

  );


}

export default App;