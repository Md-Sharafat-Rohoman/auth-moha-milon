import { Children, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRouts = ({children}) => {
    const {user} = useContext(AuthContext);
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivetRouts;