import axios from "axios";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {

    const navigate = useNavigate();
    // const { logOut } = useContext(AuthContext);
    

    axiosSecure.interceptors.request.use(function (config) {
        // console.log('i am ')
        const token = localStorage.getItem('access-token');
        console.log('this is my token = ', token);
        config.headers.authorization = `Barer ${token}`;
        return config;

    }, function (error) {
        // console.log('i am gett')
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
        
      
        return response;
    }, async (error) => {
        // console.log('i am error', error)
        
        const status = error?.response?.status;
        if (status === 401 || status === 403) {
            // await logOut();
            navigate('/login')
        }
        return Promise.reject(error);
    });
    return axiosSecure;
};

export default useAxiosSecure;