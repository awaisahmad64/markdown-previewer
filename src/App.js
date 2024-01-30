import React, { useState } from 'react';
import './App.css';
import Previewer from './Previewer'; // Make sure to use the correct path

const App = () => {
  const markdownExample =
    "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";
  const [markdown, setMarkdown] = useState(markdownExample);
  const [isMax, setIsMax] = useState(false);
  const [isMaxPreview, setIsMaxPreview] = useState(false);

  // Update the 'markdown' state with your actual Markdown content
  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };
  const maxHandler = (e) => {
    e.preventDefault();
    setIsMax((prev) => !prev);
  };
  const getData = (data) => {
    setIsMaxPreview(data);
  };
  return (
    <div className="container">
      {/* Input area for Markdown content */}
      <div
        className="editor-wrapper"
        style={{ display: isMaxPreview ? 'none' : 'block' }}
      >
        <div className="editor-header">
          <strong>Editor</strong>
          <span onClick={maxHandler}>
            {isMax ? (
              <i className="fa-solid fa-down-left-and-up-right-to-center cursor-pointer "></i>
            ) : (
              <i className="fa-solid fa-maximize cursor-pointer"></i>
            )}
          </span>
        </div>
        <textarea
          value={markdown}
          onChange={handleMarkdownChange}
          id="editor"
          style={{ height: isMax ? '100vh' : '300px' }}
        />
      </div>
      <Previewer markdown={{ newMarkdown: markdown, isMax, getData }} />
    </div>
  );
};

export default App;
