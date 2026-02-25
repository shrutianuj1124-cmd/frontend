import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ProtectedRoute = () => {
    const { admin, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Loading...</div>; // Or a proper spinner
    }

    return admin ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
