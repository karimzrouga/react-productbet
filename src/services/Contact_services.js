import axios from "axios";
import { Token } from "../Constantes/Token";

const apiUrl = "https://evcapp.herokuapp.com/api";
async function GetAllcontacts() {
  return axios.get(apiUrl + "/contactall", {
    headers: {
      Authorization: ` Bearer ${Token}`,
    },
  });
}

function Addcontact($data) {
  return axios.post(apiUrl + "/contactadd", { ...$data },{});
}
function Deletecontact($id) {
  return axios.delete(apiUrl + "/contactdelete" + $id, {
    headers: {
      Authorization: ` Bearer ${Token}`,
    },
  });
}

function Updatecontact($data) {
  return axios.post(
    apiUrl + "/contactadd",
    { ...$data },
    {
      headers: {
        Authorization: ` Bearer ${Token}`,
      },
    }
  );
}
function Findbyid($id) {
  //console.log(apiUrl + $id);
  return axios.get(apiUrl + "/contactfind" + $id, {
    headers: {
      Authorization: ` Bearer ${Token}`,
    },
  });
}
export { GetAllcontacts, Addcontact, Deletecontact, Findbyid, Updatecontact };
