import axios from "axios";
import { Token } from "../Constantes/Token";

const apiUrl = "https://evcapp.herokuapp.com/api";

 function GetAllClients() {
  return axios.get(apiUrl + "/Clientall", {
    headers: {
      Authorization: ` Bearer ${Token}`,
    },
  });
}

function Addclient($data) {
  return axios.post(
    apiUrl + "/Clientadd",
    { ...$data } );
}
function Clientbets($id) {
  return axios.get(apiUrl + "/Clientbets" + $id, {
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });
}
function loadclient($data) {
  return axios.get(apiUrl + "/load/" + $data,);
}
function DeleteClient($id) {
  return axios.delete(apiUrl + "/Clientdelete" + $id, {
    headers: {
      Authorization: ` Bearer ${Token}`,
    },
  });
}

function UpdateClient($data) {
  return axios.post(
    apiUrl + "/Clientadd",
    { ...$data },
    {
      headers: {
        Authorization: ` Bearer ${Token}`,
      },
    }
  );
}
function Findbyid($id) {
  console.log(apiUrl + $id);
  return axios.get(apiUrl + "/Clientfind" + $id, {
    headers: {
      Authorization: ` Bearer ${Token}`,
    },
  });
}
export {
  GetAllClients,
  Addclient,
  DeleteClient,
  Findbyid,
  UpdateClient,
  loadclient,
  Clientbets,
};
