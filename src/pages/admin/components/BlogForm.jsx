import { useState, useEffect } from 'react';
import { Save, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import styles from './BlogForm.module.css';

const BlogForm = ({ initialData, onSubmit, onCancel, isSubmitting }) => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        description: '',
        seoMetaTitle: '',
        seoMetaDescription: '',
    });
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        if (initialData) {
            setFormData({
                title: initialData.title || '',
                author: initialData.author || '',
                description: initialData.description || '',
                seoMetaTitle: initialData.seoMetaTitle || '',
                seoMetaDescription: initialData.seoMetaDescription || '',
            });
            if (initialData.image) {
                setImagePreview(`http://localhost:5000/${initialData.image}`);
            }
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title', formData.title);
        data.append('author', formData.author);
        data.append('description', formData.description);
        data.append('seoMetaTitle', formData.seoMetaTitle);
        data.append('seoMetaDescription', formData.seoMetaDescription);
        if (image) {
            data.append('image', image);
        }
        onSubmit(data);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.layout}>
                <div className={styles.mainFields}>
                    <div className={styles.inputGroup}>
                        <label>Blog Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter post title"
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Content</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Write your blog content here... (HTML is supported)"
                            className={styles.contentTextarea}
                            rows={18}
                            required
                        />
                        <span className={styles.hint}>Tip: You can use basic HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;strong&gt;, &lt;ul&gt;, &lt;li&gt;</span>
                    </div>

                    <div className={styles.seoSection}>
                        <h3>SEO Settings</h3>
                        <div className={styles.inputGroup}>
                            <label>Meta Title</label>
                            <input
                                type="text"
                                name="seoMetaTitle"
                                value={formData.seoMetaTitle}
                                onChange={handleChange}
                                placeholder="Meta title for search engines"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Meta Description</label>
                            <textarea
                                name="seoMetaDescription"
                                value={formData.seoMetaDescription}
                                onChange={handleChange}
                                placeholder="Short description for search results"
                                rows="3"
                            />
                        </div>
                    </div>
                </div>

                <aside className={styles.sideFields}>
                    <div className={styles.inputGroup}>
                        <label>Author Name</label>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            placeholder="e.g. Admin"
                            required
                        />
                    </div>

                    <div className={styles.imageUpload}>
                        <label>Featured Image</label>
                        <div className={styles.previewContainer}>
                            {imagePreview ? (
                                <img src={imagePreview} alt="Preview" className={styles.preview} />
                            ) : (
                                <div className={styles.placeholder}>
                                    <ImageIcon size={40} />
                                    <span>No image selected</span>
                                </div>
                            )}
                        </div>
                        <input
                            type="file"
                            id="imageInput"
                            accept="image/*"
                            onChange={handleImageChange}
                            hidden
                        />
                        <label htmlFor="imageInput" className={styles.uploadBtn}>
                            {imagePreview ? 'Change Image' : 'Upload Image'}
                        </label>
                    </div>

                    <div className={styles.actions}>
                        <button
                            type="submit"
                            className={styles.saveBtn}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <Loader2 className={styles.spin} size={20} />
                            ) : (
                                <Save size={20} />
                            )}
                            <span>{initialData ? 'Update Blog' : 'Save Blog'}</span>
                        </button>
                        <button
                            type="button"
                            className={styles.cancelBtn}
                            onClick={onCancel}
                            disabled={isSubmitting}
                        >
                            <X size={20} />
                            <span>Cancel</span>
                        </button>
                    </div>
                </aside>
            </div>
        </form>
    );
};

export default BlogForm;
