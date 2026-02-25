import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import BlogForm from './components/BlogForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditBlog = () => {
    const [initialData, setInitialData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { id } = useParams();
    const { admin } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/api/blogs/${id}`);
                setInitialData(data);
            } catch (error) {
                toast.error('Error fetching blog details');
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id]);

    const handleSubmit = async (formData) => {
        setIsSubmitting(true);
        try {
            await axios.put(`http://localhost:5000/api/blogs/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${admin.token}`,
                },
            });
            toast.success('Blog updated successfully!');
            setTimeout(() => navigate('/admin/blogs'), 2000);
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error updating blog');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <ToastContainer position="top-right" autoClose={3000} />
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>
                    Edit Blog
                </h1>
                <p style={{ color: '#6b7280' }}>Update your post content and SEO settings</p>
            </div>
            <BlogForm
                initialData={initialData}
                onSubmit={handleSubmit}
                onCancel={() => navigate('/admin/blogs')}
                isSubmitting={isSubmitting}
            />
        </div>
    );
};

export default EditBlog;
