import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Category.css";
import { changeCategory } from "../../features/category/CategorySlice";

function Category() {
  const category = useSelector((state) => state.category.category);
  const categoryDispatch = useDispatch();
  const [active, setActive] = useState(0);

  const categoryList = [
    "regional",
    "technology",
    "lifestyle",
    "business",
    "general",
    "programming",
    "science",
    "entertainment",
    "world",
    "sports",
    "finance",
    "academia",
    "politics",
    "health",
    "opinion",
    "food",
    "game",
  ];
  return (
    <>
      <div className="py-3 d-flex align-items-center justify-content-center gap-2">
        <span className="d-flex gap-2 fs-4 fw-bold">
          <span className="text-capitalize">{category}</span>
          <span>News</span>
        </span>
      </div>
      <div className="col-10 mx-auto d-flex align-items-center justify-content-center flex-wrap gap-2">
        {categoryList.map((item, index) => (
          <button
            className={`btn btn-outline-dark ${
              active === index ? "btn-dark text-white" : ""
            }`}
            key={index}
            onClick={() => {
              categoryDispatch(changeCategory(item));
              setActive(index);
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default Category;
