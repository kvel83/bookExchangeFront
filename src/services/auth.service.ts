import axios from "axios";
import User from "../interfaces/user";

const API_URL = "http://localhost:3000/api/auth/";

class AuthService{
    login(username: string, password: string){
        return axios
        .post(API_URL + 'signin',{
            userName: username,
            userPassword: password
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
        const finalUser = {
            ...user,
            role: '2'
        };
        return axios
            .post(API_URL + "signup",finalUser)
            .then(response => {
                if (response.status === 200){
                    return response;
                }
            })
            .catch(error => {
                if (error.response){
                    return error.message
                }else{
                    return error.status(500);
                }
            });
    }

    getCurrentUser(){
        const userLS = localStorage.getItem("user");
        if (userLS) return JSON.parse(userLS);
        return null;
    }
}

export default new AuthService();


