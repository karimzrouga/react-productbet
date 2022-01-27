import axios from "axios";
const apiUrl = "http://127.0.0.1:8080/api/upload";
export default async function Uploadimage(formData ) {
 
  return axios.post(apiUrl,formData ,{
    headers: {'Content-Type': 'multipart/form-data' }
  }).then((Response)=>{console.log(Response)})
}

