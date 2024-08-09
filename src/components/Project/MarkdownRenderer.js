import React, { useState, useEffect } from 'react';
import { Remarkable } from 'remarkable';
import axios from 'axios'; // Add this line to import axios

const MarkdownRenderer = ({ markdown, filePath }) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    axios.get(filePath)
      .then(response => {
        const md = new Remarkable();
        setHtmlContent(md.render(response.data));
        })
      .catch(error => {
        console.error('Error fetching markdown file:', error);
        setHtmlContent('<h1>Network error, please try again Later:( </h1>');
      });
  }, [filePath]);

  useEffect(() => {
    const md = new Remarkable();
    setHtmlContent(md.render(markdown));
    // console.log("markdown renderer 获得html content:", htmlContent);
  }, [markdown]);

  return <div className='markdown-container p-3' dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default MarkdownRenderer;
