import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Favorite from "./components/Favorite";

const App = () => {
  let route = [
    {
      id: 1,
      Link: "/",
      element: <Home />,
    },
    {
      id: 2,
      Link: "/product",
      element: <Product />,
    },
    {
      id: 3,
      Link: "/favorite",
      element: <Favorite />,
    },
  ];
  return (
    <>
      <Header />
      <Routes>
        {route.map((el) => (
          <Route path={el.Link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
};

export default App;
