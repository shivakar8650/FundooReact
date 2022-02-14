import AxiosService from "./AxiosServices";

const axiosService = new AxiosService();
const baseURL ="https://localhost:44361/api/User";

class Userservices{
      Register(Data){
        return axiosService.post(`${baseURL}`,Data);
      }
    
      login(data){
        return axiosService.post(`${baseURL}/Login`,data);
      }
    
      forget(data){
          console.log("shiv");
        return axiosService.post(`${baseURL}/forgetPassword`,data);
      }
    
      ResetPassword(data){
        let token = window.location.href.split("reset")[1].substring(1);
        console.log(token);
        const head = {
          headers: { 'Authorization': `Bearer ${token}` }
        };
        return axiosService.put(`${baseURL}/resetPassword`,data,head);
      }
    
  
    }

export default Userservices