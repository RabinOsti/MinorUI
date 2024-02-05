import React, { useState } from "react";
import "./classify.css";

const Classify = () => {
  const [file, setFile] = useState();

  function handleImageInput(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="classify">
      <div>
        <input type="file" hidden id="inputImg" onChange={handleImageInput} />
        <label htmlFor="inputImg">Upload Image</label>
      </div>
      <div>{file && <img src={file} alt="Uploaded" />}</div>
      <div>
        {file && (
          <div className="report">
            <h3>Disease Detected: Mosaic Virus</h3>
            <h3>Confidence: 90%</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Classify;
