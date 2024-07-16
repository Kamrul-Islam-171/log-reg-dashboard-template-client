import { useEffect } from "react";
import useAxiosSecure from "../../utils/useAxiosSecure";


const Home = () => {
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get('/my-name')
        
    }, [])
    return (
        <div>
            Home
        </div>
    );
};

export default Home;