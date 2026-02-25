import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import StatCard from './components/StatCard';
import { FileText, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const { admin } = useContext(AuthContext);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/inquiries/stats', {
                    headers: { Authorization: `Bearer ${admin.token}` }
                });
                setStats(data);
            } catch (error) {
                console.error('Error fetching stats:', error);
            } finally {
                setLoading(false);
            }
        };

        if (admin) fetchStats();
    }, [admin]);

    if (loading) return <div className={styles.loading}>Loading Dashboard...</div>;

    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                <h1>Welcome back, {admin.username}!</h1>
                <p>Here's what's happening with your website today.</p>
            </header>

            <div className={styles.statsGrid}>
                <StatCard
                    title="Total Blogs"
                    value={stats?.blogCount || 0}
                    icon={FileText}
                    color="#4f46e5"
                />
                <StatCard
                    title="Total Inquiries"
                    value={stats?.inquiryCount || 0}
                    icon={MessageSquare}
                    color="#10b981"
                />
                <StatCard
                    title="Recent Activity"
                    value={stats?.recentInquiries?.length || 0}
                    icon={Clock}
                    color="#f59e0b"
                />
            </div>

            <div className={styles.recentGrid}>
                <section className={styles.recentSection}>
                    <div className={styles.sectionHeader}>
                        <h2>Recent Blogs</h2>
                        <Link to="/admin/blogs" className={styles.viewAll}>
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className={styles.list}>
                        {stats?.recentBlogs?.map(blog => (
                            <div key={blog._id} className={styles.listItem}>
                                <div className={styles.itemInfo}>
                                    <h3>{blog.title}</h3>
                                    <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        ))}
                        {stats?.recentBlogs?.length === 0 && <p className={styles.empty}>No blogs yet.</p>}
                    </div>
                </section>

                <section className={styles.recentSection}>
                    <div className={styles.sectionHeader}>
                        <h2>Recent Inquiries</h2>
                        <Link to="/admin/inquiries" className={styles.viewAll}>
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className={styles.list}>
                        {stats?.recentInquiries?.map(inquiry => (
                            <div key={inquiry._id} className={styles.listItem}>
                                <div className={styles.itemInfo}>
                                    <h3>{inquiry.name}</h3>
                                    <p>{inquiry.email} • {new Date(inquiry.createdAt).toLocaleDateString()}</p>
                                </div>
                                <span className={`${styles.status} ${styles[inquiry.status]}`}>
                                    {inquiry.status}
                                </span>
                            </div>
                        ))}
                        {stats?.recentInquiries?.length === 0 && <p className={styles.empty}>No inquiries yet.</p>}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AdminDashboard;
