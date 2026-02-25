import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { Plus, Edit, Trash2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './AdminBlogs.module.css';

const AdminBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const { admin } = useContext(AuthContext);

    const fetchBlogs = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/blogs');
            setBlogs(data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            try {
                await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
                    headers: { Authorization: `Bearer ${admin.token}` }
                });
                setBlogs(blogs.filter(blog => blog._id !== id));
            } catch (error) {
                alert('Error deleting blog');
            }
        }
    };

    if (loading) return <div className={styles.loading}>Loading Blogs...</div>;

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1>Blogs</h1>
                    <p>Manage your website's blog posts</p>
                </div>
                <Link to="/admin/blogs/add" className={styles.addBtn}>
                    <Plus size={20} />
                    <span>Add New Blog</span>
                </Link>
            </header>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map(blog => (
                            <tr key={blog._id}>
                                <td>
                                    <img
                                        src={`http://localhost:5000/${blog.image}`}
                                        alt={blog.title}
                                        className={styles.thumbnail}
                                    />
                                </td>
                                <td>
                                    <div className={styles.titleInfo}>
                                        <span className={styles.blogTitle}>{blog.title}</span>
                                        <Link to={`/blog/${blog.slug}`} className={styles.slugLink}>
                                            /{blog.slug} <ExternalLink size={12} />
                                        </Link>
                                    </div>
                                </td>
                                <td>{blog.author}</td>
                                <td>{new Date(blog.date).toLocaleDateString()}</td>
                                <td className={styles.actions}>
                                    <Link to={`/admin/blogs/edit/${blog._id}`} className={styles.editBtn}>
                                        <Edit size={18} />
                                    </Link>
                                    <button onClick={() => handleDelete(blog._id)} className={styles.deleteBtn}>
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {blogs.length === 0 && <div className={styles.empty}>No blogs found. Add your first post!</div>}
            </div>
        </div>
    );
};

export default AdminBlogs;
