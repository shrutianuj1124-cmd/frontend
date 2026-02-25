import styles from './StatCard.module.css';

const StatCard = ({ title, value, icon: Icon, color }) => {
    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.value}>{value}</p>
            </div>
            <div className={styles.iconWrapper} style={{ backgroundColor: color }}>
                <Icon size={24} color="#fff" />
            </div>
        </div>
    );
};

export default StatCard;
