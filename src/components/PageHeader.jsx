import styles from './PageHeader.module.css';

const PageHeader = ({ title, subtitle }) => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={`${styles.content} revealScale`}>
                    <h1>{title}</h1>
                    {subtitle && <p>{subtitle}</p>}
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
