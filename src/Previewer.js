import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const Previewer = ({ markdown }) => {
  const [isMaxPre, setIsMaxPre] = useState(false);
  const previewMaxHandler = (e) => {
    e.preventDefault();
    const newIsMax = !isMaxPre;
    setIsMaxPre(newIsMax);
    markdown.getData(newIsMax);
  };
  const html = marked.parse(markdown.newMarkdown, { breaks: true });
  return (
    <>
      <div
        className="preview-wrapper"
        style={{ display: markdown.isMax ? 'none' : 'block' }}
      >
        <div className="preview-header">
          <strong>Previewer</strong>
          <span onClick={previewMaxHandler}>
            {isMaxPre ? (
              <i className="fa-solid fa-down-left-and-up-right-to-center cursor-pointer "></i>
            ) : (
              <i className="fa-solid fa-maximize cursor-pointer "></i>
            )}
          </span>
        </div>
        <div
          className="preview"
          id="preview"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </>
  );
};

export default Previewer;
