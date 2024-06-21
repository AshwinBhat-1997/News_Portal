import React from "react";
import Navbar from "../components/navbar/Navbar";
import Category from "../components/category/Category";
import NewsContainer from "../components/card/NewsContainer";
import Paginations from "../components/pagination/Pagination";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Category />
      <NewsContainer />
      <Paginations />
      <Footer />
    </>
  );
}

export default Home;
