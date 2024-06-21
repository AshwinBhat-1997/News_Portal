import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../features/category/CategorySlice";

function Paginations() {
  const page = [1, 2, 3, 4, 5];
  const [pages, setPages] = useState(1);
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-3 mx-auto my-5 d-flex align-items-center justify-content-center gap-2">
        {page.map((page, index) => (
          <button
            key={index}
            onClick={() => {
              setPages(index + 1);
              dispatch(changePage(page));
            }}
            className={`btn btn-outline-dark ${
              pages === index + 1 ? "btn-dark text-white" : ""
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
}

export default Paginations;
