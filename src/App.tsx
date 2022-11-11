import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/layout/footer/Footer";
import Header from "./component/layout/header";
import Main from "./component/layout/main/Main";
import Login from "./component/page/Login";
import Search from "./component/page/Search";
import SignUp from "./component/page/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search/channel" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
