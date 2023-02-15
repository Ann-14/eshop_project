import React, { useState } from "react";

export const Pagination = ({
  currentPage,
  setCurrentPage,
  productsPerPage,
  totalProducts,
}) => {
  const numberOfPages = [];
  const totalPages = totalProducts / productsPerPage;
  // Limit the page Numbers shown
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    numberOfPages.push(i);
  }

  //Select page
  const selectPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //Go to next Page
  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
    //show next block of numberOfPages
    if(currentPage + 1 > maxPageNumberLimit){
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }

  };
  //Go to previous Page
  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);

    //show next block of numberOfPages
    if((currentPage - 1) % pageNumberLimit === 0){
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  };
  
  return (
    <>
      <div className="flex justify-center">
        <nav>
          <ul className="flex list-style-none">
            <li
              className={
                currentPage === numberOfPages[0]
                  ? `hidden`
                  : `block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none`
              }
              onClick={goToPrevPage}
            >
              Prev
            </li>
            {numberOfPages.map((page) => {
              if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
              }
              return (
                <li
                  key={page}
                  onClick={() => selectPage(page)}
                  className={
                    currentPage === page
                      ? `block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md`
                      : ` block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none`
                  }
                >
                  {page}
                </li>
              );
            })}

            <li
              className={
                currentPage ===numberOfPages[numberOfPages.length - 1]
                  ? `hidden`
                  : `block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none`
              }
              onClick={goToNextPage}
            >
              Next
            </li>
            <p>
              <b>{`page ${currentPage}`}</b>
              <span>{` of `}</span>
              <b>{`${Math.ceil(totalPages)}`}</b>
            </p>
          </ul>
        </nav>
      </div>
    </>
  );
};
