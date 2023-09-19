import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import html2pdf from "html2pdf.js";
import TemplateONE from "./Pages/TamplateONE";



// import { data } from "./Pages/dummydata";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:7000";
function App() {
  const [data, setdata] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let data = async () => {
      console.log("Fetching data...");
      let a = await axios.get("/");
      setdata(a.data.data);
    };
    data();
  }, []);
 

  const [loading, setLoading] = useState(false);

  //important Line
  var opt = {
    margin: 0.2,
    html2canvas: { scale: 2 },
  };
  const downloadPdf = () => {
    setLoading(true);

    const html = ReactDOMServer.renderToString(<TemplateONE data={data} />);
    html2pdf().set(opt).from(html).save("resume.pdf");

    setLoading(false);
  };

////////////////////////////////////////////

const displayPdf =async () => {
  setLoading(true);

  const html = ReactDOMServer.renderToString(<TemplateONE data={data} />);
  const blob = await html2pdf().set(opt).from(html).output('blob');
  console.log(blob)

  // Create a temporary URL for the blob object.
  const url = URL.createObjectURL(blob);

  // Open the PDF in the browser.
  window.open(url, '_blank');

  setLoading(false);
};






////////////////////////////////////////////


  return (
    data && (
      <>
      <button className="bg-blue-500 p-8 rounded text-white" onClick={displayPdf}>Preview Pdf</button>
        <div className="App">
          <button
            className="bg-red-500 p-8 rounded text-white"
            onClick={downloadPdf}
            disabled={loading}
          >
            {loading ? <span>Downloading...</span> : <span>Download</span>}
          </button>

        </div>
      </>
    )
    );
  }
  
  export default App;
  