import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../features/category/CategorySlice";
import NewsCard from "./NewsCard";

function NewsContainer() {
  const category = useSelector((state) => state.category.category);
  const pageNumber = useSelector((state) => state.category.page);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews({ category, pageNumber }));
  }, [category, pageNumber]);
  const loading = useSelector((state) => state.category.loading);
  const data = useSelector((state) => state.category.data);
  const error = useSelector((state) => state.category.error);
  return (
    <>
      {loading === true && (
        <h1 className="py-5 text-center fs-3">Loading...</h1>
      )}
      <div className="col-10 mx-auto d-flex flex-wrap my-5 gap-4">
        {data &&
          data.news.map((data) => (
            <NewsCard
              key={data.id}
              img={data.image}
              title={data.title}
              id={data.id}
            />
          ))}
      </div>
      {error && <div className="col-10 mx-auto">{error}</div>}
    </>
  );
}

export default NewsContainer;
