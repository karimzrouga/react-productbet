import "../App.css";
import GArticle from "../component/admin/pages/GArticles";
import Gclient from "../component/admin/pages/Gclients";
import { Routes, Route } from "react-router-dom";
import GBet from "../component/admin/pages/GBet";
import GCategorie from "../component/admin/pages/GCategorie";
import GEvent from "../component/admin/pages/GEvent";
import Gcontact from "../component/admin/pages/GContact";
export default function AdminMain({
  onFileChange,
  onFileUpload,
  file,
  filename,
}) {
  var user = JSON.parse(localStorage.getItem("user"));

  /********************************************** */
  return user && user.role === "admin" ? (
    <Routes>
      <Route path="/admin" element={<Gclient />} />

      <Route
        path="/Aarticles"
        element={
          <GArticle
            onFileChange={onFileChange}
            onFileUpload={onFileUpload}
            File={file}
            filename={filename}
          />
        }
      />

      <Route
        path="/Abets"
        element={
          <GBet
            onFileChange={onFileChange}
            onFileUpload={onFileUpload}
            File={file}
            filename={filename}
          />
        }
      />
      <Route
        path="/Acategorie"
        element={
          <GCategorie
            onFileChange={onFileChange}
            onFileUpload={onFileUpload}
            File={file}
            filename={filename}
          />
        }
      />
      <Route
        path="/Aevent"
        element={
          <GEvent
            onFileChange={onFileChange}
            onFileUpload={onFileUpload}
            File={file}
            filename={filename}
          />
        }
      />
      <Route path="/Acontact" element={<Gcontact/>} />
    </Routes>
  ) : (
    <></>
  );
}
