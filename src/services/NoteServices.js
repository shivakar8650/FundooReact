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

    updatecolor(data){
        return axiosService.put(`${baseURL}/Color`,data,headerConfig)
   }
    archivenotes(data){
        return axiosService.put(`${baseURL}/Archive`,data,headerConfig)
    }
    deletenotes(data){
        return axiosService.put(`${baseURL}/Trash`,data,headerConfig)
    }
    updatenotes(data){
        return axiosService.put(`${baseURL}`,data,headerConfig)
    }

}
   

export default NoteServices 