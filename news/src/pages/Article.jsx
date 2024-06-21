import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

function Article() {
  const { id } = useParams();
  const data = useSelector((state) => state.category.data);
  const news = data.news.filter((data) => data.id === id);

  return (
    <>
      <div className="article">
        <Navbar />
        <div className="news">
          <img
            src={
              news[0].image === "None"
                ? "https://placehold.co/600x400"
                : news[0].image
            }
            alt="news-image"
            className="col-10 col-md-6 d-block mx-auto object-fit-cover py-5"
          />
          <div className="col-10 col-md-6 mx-auto">
            <h1 className="fs-3 pb-3">{news[0].title}</h1>
            <p className="fs-5 pb-3">{news[0].description}</p>
            <h6>Author : {news[0].author}</h6>
            <h6>Published : {news[0].published}</h6>
          </div>
        </div>
        <div className="mt-5">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Article;
