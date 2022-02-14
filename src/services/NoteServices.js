import AxiosService from "./AxiosServices";

const axiosService = new AxiosService();
const baseURL ="https://localhost:44361/api/Note";
//https://localhost:44361/api/Note
const headerConfig = {
  
        headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
    
}
class NoteServices{
     
    addnote(data) {
        return axiosService.post(`${baseURL}`, data, headerConfig);
    }

    getnotes() {
        return axiosService.get(`${baseURL}/AllNotesOfUser`, headerConfig);
    }
   
}

export default NoteServices 