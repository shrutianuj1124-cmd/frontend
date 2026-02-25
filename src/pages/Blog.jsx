import { useState, useEffect } from 'react';
import axios from 'axios';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
        fetchBlogs();
    }, []);

    if (loading) return <div className={styles.loading}>Loading Blogs...</div>;

    return (
        <div className="blog-page">
            <PageHeader
                title="Our Blog"
                subtitle="Insights, trends, and strategies for the modern digital era."
            />

            <div className="container">
                <div className={styles.grid}>
                    {blogs.map((blog, index) => (
                        <div
                            key={blog._id}
                            className={`${styles.card} revealScale delay${(index % 3) + 1}`}
                        >
                            <img src={`http://localhost:5000/${blog.image}`} alt={blog.title} />
                            <div className={styles.cardContent}>
                                <span className={styles.date}>{new Date(blog.date).toLocaleDateString()}</span>
                                <h3>{blog.title}</h3>
                                <p>{blog.description.replace(/<[^>]*>?/gm, '').substring(0, 120)}...</p>
                                <Link to={`/blog/${blog.slug}`} className={styles.readMore}>Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
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
