import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <header>
        {/* Header */}

        <Header />


      </header>
      <div className="app__body">
              {/* App body */}
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          {/* Widgets */}
          </div>
    </div>
  );
}

export default App;
