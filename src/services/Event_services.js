import axios from "axios";
import { Token } from "../Constantes/Token";

const apiUrl = "https://evcapp.herokuapp.com/api";

async function GetAllEvent() {
  return axios.get(apiUrl + "/Eventall");
}

function AddEvent($data) {
  return axios.post(
    apiUrl + "/Eventadd",
    { ...$data },
    {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    }
  );
}
function AddEvents($data, $idbet) {
  return axios.post(
    apiUrl + "/Eventadd/" + $idbet,
    { ...$data },
    {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    }
  );
}
async function DeleteEvent($id) {
  return axios.delete(apiUrl + "/Eventdelete" + $id, {
    headers: {
      Authorization: ` Bearer ${Token}`,
    },
  });
}

function UpdateEvent($data) {
  return axios.post(
    apiUrl + "/Eventadd",
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
  return axios.get(apiUrl + "/Eventfind" + $id, {
    headers: {
      Authorization: ` Bearer ${Token}`,
    },
  });
}
export { GetAllEvent, AddEvent, DeleteEvent, Findbyid, UpdateEvent, AddEvents };
