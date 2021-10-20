import axios from 'axios';

const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_BASE_URL || 'http://localhost:3800'
});

axiosApi.interceptors.request.use(
    (request) => {
        console.log(request);

        return request;
            
    }
)

export default axiosApi;