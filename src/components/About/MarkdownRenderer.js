import React, { useState, useEffect } from 'react';
import { Remarkable } from 'remarkable';

const MarkdownRenderer = ({ markdown }) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const md = new Remarkable();
    setHtmlContent(md.render(markdown));
    console.log("markdown renderer 获得html content:", htmlContent);
  }, [markdown]);

  return <div className='markdown-container p-3' dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default MarkdownRenderer;
