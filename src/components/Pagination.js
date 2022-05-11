import React, { useEffect, useState } from "react";

export default function Pagination({ onPagination, total, perpage }) {
  const [counter, setCounter] = useState(1);
  const [buttons] = useState(Math.ceil(total / perpage));

  useEffect(() => {
    let Value = perpage * counter;

    onPagination(Value - perpage, Value);
  }, [counter]);

  const changepage = (type) => {
    if (type === "prev") {
        if(counter===1){
            setCounter(1);
        }else{
            setCounter(counter - 1);
        }
     
    }
    if (type === "next") {
        if(Math.ceil(total / perpage)===counter){
            setCounter(counter)
        }else{
            setCounter(counter + 1);
        }
      
    }
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" onClick={() => changepage("prev")}>
              Previous
            </a>
          </li>
          {new Array(buttons).fill("").map((ele, index) => {
            return (
              <li
                class={`page-item ${index + 1 === counter ? "active" : null}`}
              >
                <a
                  class="page-link"
                  href="#"
                  onClick={() => setCounter(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            );
          })}

          <li class="page-item">
            <a class="page-link" href="#" onClick={() => changepage("next")}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
