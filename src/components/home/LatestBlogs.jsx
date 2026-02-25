import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import styles from './LatestBlogs.module.css';

const LatestBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLatestBlogs = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/blogs/latest');
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching latest blogs:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchLatestBlogs();
    }, []);

    if (loading || blogs.length === 0) return null;

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <span className={styles.tagline}>Our Blog</span>
                    <h2 className={styles.title}>Latest <span>Insights</span></h2>
                    <p className={styles.subtitle}>
                        Stay updated with the latest trends, tips, and strategies in the digital world.
                    </p>
                </div>

                <div className={styles.grid}>
                    {blogs.map((blog, index) => (
                        <article key={blog._id} className={`${styles.card} revealScale delay${(index % 3) + 1}`}>
                            <div className={styles.imageBox}>
                                <img src={`http://localhost:5000/${blog.image}`} alt={blog.title} />
                            </div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span><User size={14} /> {blog.author}</span>
                                    <span><Calendar size={14} /> {new Date(blog.date).toLocaleDateString()}</span>
                                </div>
                                <h3>{blog.title}</h3>
                                <p>{blog.description.replace(/<[^>]*>?/gm, '').substring(0, 100)}...</p>
                                <Link to={`/blog/${blog.slug}`} className={styles.readMore}>
                                    Read More <ArrowRight size={16} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className={styles.viewAll}>
                    <Link to="/blog" className={styles.viewAllBtn}>
                        View All Posts <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestBlogs;
