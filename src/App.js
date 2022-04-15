import React, { lazy, Suspense } from 'react'

import Appbar from "./components/TitleBar/Appbar";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import { Switch, Route } from 'react-router-dom'
import Blogs from './Pages/Blogs/Blogs';
import Section2 from './components/AboutUs/Section2';
// import Blogs from "./Pages/Blogs/Blogs";

// const Blogs = lazy(()=>import("./Pages/Blogs/Blogs"))

function App() {
  return (
    <>
      <Appbar />
      {/* <Blogs /> */}
      <Section2 />
      <Footer />

    </>
  );
}

export default App;
