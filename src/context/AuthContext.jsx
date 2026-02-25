import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedAdmin = localStorage.getItem('adminInfo');
        if (storedAdmin) {
            setAdmin(JSON.parse(storedAdmin));
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/login', {
                username,
                password,
            });
            setAdmin(data);
            localStorage.setItem('adminInfo', JSON.stringify(data));
            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Login failed',
            };
        }
    };

    const logout = () => {
        setAdmin(null);
        localStorage.removeItem('adminInfo');
    };

    return (
        <AuthContext.Provider value={{ admin, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
