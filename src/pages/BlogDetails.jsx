import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import PageHeader from '../components/PageHeader';
import styles from './BlogDetails.module.css';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const BlogDetails = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/api/blogs/slug/${slug}`);
                setBlog(data);
            } catch (err) {
                console.error('Error fetching blog:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [slug]);

    if (loading) return <div className={styles.loading}>Loading Post...</div>;
    if (error || !blog) return (
        <div className={styles.error}>
            <h2>Post Not Found</h2>
            <Link to="/blog" className={styles.backBtn}><ArrowLeft size={18} /> Back to Blogs</Link>
        </div>
    );

    return (
        <div className={styles.blogDetails}>
            <PageHeader
                title={blog.title}
                subtitle={`By ${blog.author} • ${new Date(blog.date).toLocaleDateString()}`}
            />

            <div className="container">
                <div className={styles.wrapper}>
                    <Link to="/blog" className={styles.backLink}>
                        <ArrowLeft size={18} /> Back to Blogs
                    </Link>

                    <div className={styles.mainImage}>
                        <img src={`http://localhost:5000/${blog.image}`} alt={blog.title} />
                    </div>

                    <div className={styles.meta}>
                        <div className={styles.metaItem}>
                            <User size={18} />
                            <span>{blog.author}</span>
                        </div>
                        <div className={styles.metaItem}>
                            <Calendar size={18} />
                            <span>{new Date(blog.date).toLocaleDateString()}</span>
                        </div>
                    </div>

                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: blog.description }}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
