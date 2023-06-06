export default function authHeader() {
    const userLS = localStorage.getItem("user");
    let user = null;
    if (userLS) user = JSON.parse(userLS);
    if ( user && user.accessToken){
        return { Authorization: "Bearer " + user.accessToken}
    }else{
        return {Authorization: ''}
    }
}