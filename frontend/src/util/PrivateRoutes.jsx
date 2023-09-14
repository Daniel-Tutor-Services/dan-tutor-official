import { Auth } from './auth/Auth';
import { Outlet,Navigate } from 'react-router-dom';



function PrivateRoutes() {
    return (
        Auth ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes