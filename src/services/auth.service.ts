import axios from "axios";
import User from "../interfaces/user";

const API_URL = "http://localhost:8080/authenticate";

class AuthService{
    login(username: string, password: string){
        return axios
            .post(API_URL + "signin",{
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken){
                    localStorage.setItem("user",JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout(){localStorage.removeItem("user")}

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


