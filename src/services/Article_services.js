import axios from "axios";
import { Token } from "../Constantes/Token";

const apiUrl = "https://evcapp.herokuapp.com/api";
async function GetAllArticles() {
  return axios.get(apiUrl + "/Articleall");
}

function AddArticle($data,$id) {
  console.log($id)
  return axios.post(
    apiUrl + "/Articleadd/"+$id,
    { ...$data },
    {
      headers: {
       
        Authorization: `Bearer ${Token}`,
      },
    }
  );
}
function DeleteArticle($id) {
  return axios.delete(apiUrl+"/Articledelete"+$id, {
    headers: {
      Authorization: ` Bearer ${Token}`,
    },
  })
}
function UpdateArticle($data,$id) {
  return axios.post(apiUrl+"/Articleadd"+$id,{ ...$data }, {
    headers: {
      Authorization: ` Bearer ${Token}`,
    },
  });
}
function Findbyid($id) {
  //console.log(apiUrl + $id);
  return axios.get(apiUrl + "/Articlefind" + $id, {
    headers: {
      Authorization: ` Bearer ${Token}`,
    },
  });
}
export { GetAllArticles, AddArticle, DeleteArticle, Findbyid, UpdateArticle };
