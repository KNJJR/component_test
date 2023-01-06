// 参考url：https://github.com/wojtekmaj/react-pdf/wiki/Recipes

import React, {useState, memo} from 'react';
import { Document, Page, pdfjs } from "react-pdf";
 pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const ShowPDF = (props) => {

  const displayLargerPDF = (e) => {window.open(props.myPDF, '_blank')}

    {/*return (
        <div className="pdf_area">
          <button onClick={displayLargerPDF}>PDFを拡大表示</button>
          <Document file={props.myPDF}>
            <Page pageNumber={1} />
          </Document>
        </div>
    );*/}

  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <button onClick={displayLargerPDF}>PDFを拡大表示</button>
      <Document
        file={props.myPDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(
          new Array(numPages),
          (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
            />
          ),
        )}
      </Document>
    </div>
  );

}