import axios from "axios";
import { Token } from "../Constantes/Token";

const apiUrl = "https://evcapp.herokuapp.com/api";

async function GetAllBet() {
  console.log(Token);
  return axios.get(apiUrl + "/Betall");
}
function bidBet($bet, $id) {
  console.log($bet);
  console.log($id);
  return axios.post(
    apiUrl + "/Bet" + $id,
    { ...$bet },
    {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    }
  );
}

function AddBet($data) {
  return axios.post(
    apiUrl + "/Betadd",
    { ...$data },
    {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    }
  );
}
async function AddBets($data, $id) {
  return axios.post(
    apiUrl + "/ArBet/" + $id,
    { ...$data },
    {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    }
  );
}
async function DeleteBet($id) {
  return axios.delete(apiUrl + "/Betdelete" + $id, {
    headers: {
      Authorization: ` Bearer ${Token}`,
    },
  });
}

function UpdateBet($data) {
  return axios.post(
    apiUrl + "/Betadd",
    { ...$data },
    {
      headers: {
        Authorization: ` Bearer ${Token}`,
      },
    }
  );
}
function Findbyid($id) {
  //  console.log(apiUrl + $id);
  return axios.get(apiUrl + "/Betfind" + $id, {});
}
export { GetAllBet, AddBet, DeleteBet, Findbyid, UpdateBet, bidBet, AddBets };
