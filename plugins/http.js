import axios from 'axios'
// 配置 axios
axios.interceptors.response.use(function(config){
    return config
})
axios.defaults.baseURL = 'http://localhost:8000';
export default axios