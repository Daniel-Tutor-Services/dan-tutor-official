import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';



function PrivateRoutes() {
    const { userInfo } = useSelector((state) => state.auth);
    
    
    return (
        userInfo ? <Outlet /> : <Navigate to="/login" replace />
    )
}

export default PrivateRoutes