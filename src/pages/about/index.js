import React, { Component } from 'react';
import '../about/style.css';
import Menu from '../../components/hamburger_menu';
import { Document, Page } from 'react-pdf';
import PDF from '../../assets/pdf/mf.pdf';

class About extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="App-header">
        <Menu />
        <Document
          file="../../assets/pdf/mf.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

export default About;
