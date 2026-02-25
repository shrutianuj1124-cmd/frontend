import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import BlogForm from './components/BlogForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBlog = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { admin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (formData) => {
        setIsSubmitting(true);
        try {
            await axios.post('http://localhost:5000/api/blogs', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${admin.token}`,
                },
            });
            toast.success('Blog created successfully!');
            setTimeout(() => navigate('/admin/blogs'), 2000);
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error creating blog');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <ToastContainer position="top-right" autoClose={3000} />
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827', marginBottom: '0.25rem' }}>
                    Add New Blog
                </h1>
                <p style={{ color: '#6b7280' }}>Create a fresh post for your audience</p>
            </div>
            <BlogForm
                onSubmit={handleSubmit}
                onCancel={() => navigate('/admin/blogs')}
                isSubmitting={isSubmitting}
            />
        </div>
    );
};

export default AddBlog;
