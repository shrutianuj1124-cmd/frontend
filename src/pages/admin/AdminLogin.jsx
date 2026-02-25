import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import styles from './AdminLogin.module.css';
import { Lock, User, Eye, EyeOff, Loader2 } from 'lucide-react';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { login, admin } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (admin) {
            navigate('/admin/dashboard');
        }
    }, [admin, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            const result = await login(username, password);
            if (!result.success) {
                setError(result.message);
            } else {
                navigate('/admin/dashboard');
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <div className={styles.header}>
                    <h1>Admin Dashboard</h1>
                    <p>Please enter your credentials to login</p>
                </div>

                {error && <div className={styles.errorBanner}>{error}</div>}

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username">Username</label>
                        <div className={styles.inputWrapper}>
                            <User className={styles.icon} size={20} />
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <div className={styles.inputWrapper}>
                            <Lock className={styles.icon} size={20} />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className={styles.toggleBtn}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className={styles.spin} size={20} />
                                <span>Logging in...</span>
                            </>
                        ) : (
                            'Login'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
