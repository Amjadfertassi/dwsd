import React, { useState, useEffect, useLayoutEffect } from 'react';

const Editor = () => {
  const [pages, setPages] = useState([{ id: 1, content: '' }]);
  const [currentPage, setCurrentPage] = useState(1);

  const createPage = (pageNumber) => {
    setPages((prevPages) => [
      ...prevPages,
      { id: pageNumber, content: '' },
    ]);
  };

  const handleInput = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const cursorPosition = scrollTop + clientHeight;

    if (cursorPosition === scrollHeight) {
      createPage(pages.length + 1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useLayoutEffect(() => {
    const currentPageContent = pages[currentPage - 1].content;
    const container = document.getElementById(`page${currentPage}`);
    if (container) {
      container.innerHTML = currentPageContent;
    }
  }, [currentPage, pages]);

  return (
    <div>
      {pages.map((page) => (
        <div
          key={page.id}
          id={`page${page.id}`}
          className="page"
          contentEditable="true"
          onInput={handleInput}
        />
      ))}
      <div className="pagination">
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => handlePageChange(page.id)}
          >
            {page.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Editor;
