import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8081";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const _call = config => {
    //axios.defaults.headers.common['Authorization'] = 'Bearer' + " " + localStorage.getItem("token");
    return axios(config)
};
