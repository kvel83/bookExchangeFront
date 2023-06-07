import axios from "axios";
import User from "../interfaces/user";

const API_URL = "http://localhost:8080/authenticate";

class AuthService{
    login(username: string, password: string){
        return axios
        .post(API_URL,{
            username,
            password
        })
        .then(response => {
            if (response.status === 200){
                localStorage.setItem("userInformation",JSON.stringify(response.data));
            }
            return response;
        })
        .catch(error => {
            if (error.response){
                return error.response;
            }else{
                return 500;
            }
        });
    }

    logout(){localStorage.removeItem("userInformation")}

    register(user: User){
        return axios
            .post(API_URL + "signUp",{
                user
            });
    }

    getCurrentUser(){
        const userLS = localStorage.getItem("user");
        if (userLS) return JSON.parse(userLS);
        return null;
    }
}

export default new AuthService();


