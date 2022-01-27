import axios from "axios";
const apiUrl = "https://evcapp.herokuapp.com/api";
function authentication($user) {
  return axios.post(apiUrl + "/authen", { ...$user }).then((data) => {
    localStorage.setItem("Token", JSON.stringify(data.data));
  });
}

export { authentication };
