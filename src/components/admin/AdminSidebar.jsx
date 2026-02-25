import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    FileText,
    PlusCircle,
    MessageSquare,
    LogOut
} from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';
import styles from './AdminSidebar.module.css';

const AdminSidebar = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <h2>Admin Panel</h2>
            </div>
            <nav className={styles.nav}>
                <NavLink
                    to="/admin/dashboard"
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                >
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </NavLink>
                <NavLink
                    to="/admin/blogs"
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                >
                    <FileText size={20} />
                    <span>Blogs</span>
                </NavLink>
                <NavLink
                    to="/admin/blogs/add"
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                >
                    <PlusCircle size={20} />
                    <span>Add Blog</span>
                </NavLink>
                <NavLink
                    to="/admin/inquiries"
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                >
                    <MessageSquare size={20} />
                    <span>Inquiries</span>
                </NavLink>
            </nav>
            <button className={styles.logoutBtn} onClick={handleLogout}>
                <LogOut size={20} />
                <span>Logout</span>
            </button>
        </aside>
    );
};

export default AdminSidebar;
