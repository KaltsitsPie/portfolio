import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import cv from "../../Assets/CV_2024.md";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import MarkdownRenderer from "../Project/MarkdownRenderer";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {


  return (
    <div className="resume-div">
      <Container fluid className="resume-section">
        <MarkdownRenderer filePath={cv} style={{ textAlign: 'left' }}/>
      </Container>
      
    </div>
  );
}

export default Resume;
