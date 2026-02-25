import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import styles from './AdminLayout.module.css';

const AdminLayout = () => {
    return (
        <div className={styles.adminLayout}>
            <AdminSidebar />
            <main className={styles.mainContent}>
                <div className={styles.container}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
