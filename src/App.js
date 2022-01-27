import "./App.css";
import React, { useState, useEffect } from "react";
import Uploadimage from "./services/Upload";
import AdminMain from "./Main/AdminMain";
import Public from "./Main/public";
function App() {
  const [file, Setfile] = useState({ file: null });
  const [filename, Setfilename] = useState({ filename: null });
 
  let onFileChange = (event) => {
    Setfile({ file: event.target.files[0] });
    Setfilename({ filename: event.target.files[0].name });
  };
  useEffect(() => {
    console.log(file);
  }, [file]);

  let onFileUpload = () => {
    const formData = new FormData();
    if (file.file !==null )
    {
      formData.append("file", file.file, file.file.name);
      Uploadimage(formData);
    }
    
  };
  return (
    <div>
      <AdminMain
        onFileChange={onFileChange}
        onFileUpload={onFileUpload}
        file={file}
        filename={filename}
      />
      <Public
        onFileChange={onFileChange}
        onFileUpload={onFileUpload}
        file={file}
        filename={filename}
      />
    </div>
  );
}

export default App;
