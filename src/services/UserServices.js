import AxiosService from "./AxiosServices";

const axiosService = new AxiosService();

//https://jsonplaceholder.typicode.com/users
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
        return axiosService.put(`${baseURL}/resetPassword`,data);
      }
    
    }

export default Userservices;