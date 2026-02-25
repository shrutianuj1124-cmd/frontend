import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import styles from './Blog.module.css';
import api, { API_BASE_URL } from '../config/api';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const { data } = await api.get('/api/blogs');
                // Sort by latest first (createdAt descending)
                const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setBlogs(sortedData);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    if (loading) return (
        <div className={styles.loadingContainer}>
            <div className={styles.loader}></div>
            <p>Loading Blogs...</p>
        </div>
    );

    return (
        <div className="blog-page">
            <PageHeader
                title="Our Blog"
                subtitle="Insights, trends, and strategies for the modern digital era."
            />

            <div className="container">
                <main className={styles.grid}>
                    {blogs.map((blog, index) => (
                        <article
                            key={blog._id}
                            className={`${styles.card} revealScale`}
                            style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
                        >
                            <div className={styles.imageBox}>
                                <img src={`${API_BASE_URL}/${blog.image}`} alt={blog.title} />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.meta}>
                                    <span title="Author"><User size={14} /> {blog.author || 'Admin'}</span>
                                    <span title="Publish Date"><Calendar size={14} /> {new Date(blog.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                                </div>
                                <h3 className={styles.title}>{blog.title}</h3>
                                <p className={styles.excerpt}>
                                    {blog.description.replace(/<[^>]*>?/gm, '').substring(0, 130)}...
                                </p>
                                <Link to={`/blog/${blog.slug}`} className={styles.readMore}>
                                    Read More
                                </Link>
                            </div>
                        </article>
                    ))}
                </main>
                {blogs.length === 0 && (
                    <div className={styles.empty}>
                        <p>No blog posts found. Check back later!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
