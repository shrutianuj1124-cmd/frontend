import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { Trash2, Mail, Phone, Calendar, CheckCircle, Circle } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './AdminInquiries.module.css';

const AdminInquiries = () => {
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const { admin } = useContext(AuthContext);

    const fetchInquiries = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/inquiries', {
                headers: { Authorization: `Bearer ${admin.token}` }
            });
            setInquiries(data);
        } catch (error) {
            console.error('Error fetching inquiries:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInquiries();
    }, [admin]);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this inquiry?')) {
            try {
                await axios.delete(`http://localhost:5000/api/inquiries/${id}`, {
                    headers: { Authorization: `Bearer ${admin.token}` }
                });
                setInquiries(inquiries.filter(inc => inc._id !== id));
                toast.success('Inquiry deleted');
            } catch (error) {
                toast.error('Error deleting inquiry');
            }
        }
    };

    const toggleReadStatus = async (id, currentStatus) => {
        const endpoint = currentStatus === 'read' ? 'unread' : 'read';
        try {
            const { data } = await axios.put(`http://localhost:5000/api/inquiries/${id}/${endpoint}`, {}, {
                headers: { Authorization: `Bearer ${admin.token}` }
            });
            setInquiries(inquiries.map(inc => inc._id === id ? data : inc));
        } catch (error) {
            toast.error('Error updating status');
        }
    };

    if (loading) return <div className={styles.loading}>Loading Inquiries...</div>;

    return (
        <div className={styles.container}>
            <ToastContainer position="top-right" autoClose={2000} />
            <header className={styles.header}>
                <div>
                    <h1>Contact Inquiries</h1>
                    <p>Manage messages from your website visitors</p>
                </div>
            </header>

            <div className={styles.grid}>
                {inquiries.map(inc => (
                    <div key={inc._id} className={`${styles.card} ${inc.status === 'unread' ? styles.unread : ''}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.userInfo}>
                                <h3>{inc.name}</h3>
                                <div className={styles.contactItems}>
                                    <span><Mail size={14} /> {inc.email}</span>
                                    <span><Phone size={14} /> {inc.phone}</span>
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <button
                                    onClick={() => toggleReadStatus(inc._id, inc.status)}
                                    className={styles.statusBtn}
                                    title={inc.status === 'read' ? 'Mark as Unread' : 'Mark as Read'}
                                >
                                    {inc.status === 'read' ? <CheckCircle size={18} color="#10b981" /> : <Circle size={18} color="#d1d5db" />}
                                </button>
                                <button onClick={() => handleDelete(inc._id)} className={styles.deleteBtn}>
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>

                        <div className={styles.messageBox}>
                            <p>{inc.message}</p>
                        </div>

                        <div className={styles.cardFooter}>
                            <span><Calendar size={14} /> {new Date(inc.createdAt).toLocaleString()}</span>
                            <span className={`${styles.statusBadge} ${styles[inc.status]}`}>{inc.status}</span>
                        </div>
                    </div>
                ))}
            </div>

            {inquiries.length === 0 && (
                <div className={styles.empty}>
                    <Mail size={48} />
                    <p>No inquiries found.</p>
                </div>
            )}
        </div>
    );
};

export default AdminInquiries;
