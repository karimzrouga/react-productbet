import axios from "axios";
import { Token } from "../Constantes/Token";

const apiUrl = "https://evcapp.herokuapp.com/api";
 function GetAllCategories() {
  return axios.get(apiUrl + "/Categorieall");
}

function AddCategorie($data) {
  return axios.post(
    apiUrl + "/Categorieadd",
    { ...$data },
    {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    }
  );
}
function DeleteCategorie($id) {
  
  return axios.delete(apiUrl+"/Categoriedelete"+$id, {
    headers: {
      Authorization: ` Bearer ${Token}`,
    },
  })
}

function UpdateCategorie($data) {
  return axios.post(apiUrl+"/Categorieadd",{ ...$data }, {
    headers: {
      Authorization: ` Bearer ${Token}`,
    },
  });
}
function Findbyid($id) {
  //console.log(apiUrl + $id);
  return axios.get(apiUrl + "/Categoriefind" + $id, {
    headers: {
      Authorization: ` Bearer ${Token}`,
    },
  });
}
export { GetAllCategories, AddCategorie, DeleteCategorie, Findbyid, UpdateCategorie };
