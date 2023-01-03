import React, {memo} from 'react';
import { Document, Page, pdfjs } from "react-pdf";
 pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const ShowPDF = (props) => {

  const displayLargerPDF = (e) => {window.open(props.myPDF, '_blank')}

    return (
        <div className="pdf_area">
          <button onClick={displayLargerPDF}>PDFを拡大表示</button>
          <Document file={props.myPDF}>
            <Page pageNumber={1} />
          </Document>
        </div>
      );

}