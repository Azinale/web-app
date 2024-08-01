import axios from "axios"

const LoginAPI = (userName, passwordi) => {
    return axios.post(`http://localhost:8080/api/login`, { username: userName, password: passwordi })
    // return axios.post(`http://localhost:8081/api/v1/login`, { email: userName, password: passwordi })
}
export { LoginAPI }