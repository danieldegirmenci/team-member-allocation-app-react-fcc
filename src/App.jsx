import * as React from 'react';
import './App.css';
import Header from "./Header.jsx";

import Footer from "./Footer.jsx";
import Employees from "./Employees";


function App() {
  return (
    <main>
      <Header />
      <Employees />
      <Footer />
    </main>
  );
}

export default App;