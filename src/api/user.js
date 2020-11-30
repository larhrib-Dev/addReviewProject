import axios from 'axios';

export const apiLogin = (request_data) => {
    return  axios.post(`https://carguideserviceapi20201105030004.azurewebsites.net/CarGuideServiceAPI/user/login?username=${request_data.username}&password=${request_data.password}`);
}


export const apiSignUp = async (request_data) => {
    return axios.post("https://carguideserviceapi20201105030004.azurewebsites.net/CarGuideServiceAPI/user", request_data);
}


