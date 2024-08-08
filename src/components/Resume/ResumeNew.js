import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/yanchen.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  // const [width, setWidth] = useState(1200);

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        {/* <Particle /> */}
        <Row> 
          <Col xs={12} md={6} lg={6} className="ml-3">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
              className="bg-transparent m-0 py-0 px-3 mb-3"
            >
              <p className="resume-btn-text m-0 p-0">下 载 简 历</p>
            </Button>
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={0.9} /> 
            </Document>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
              className="bg-transparent m-0 py-0 px-3 mb-3"
            >
              <p className="resume-btn-text m-0 p-0">Download CV</p>
            </Button>
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={2} scale={0.9}/>
            </Document>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
