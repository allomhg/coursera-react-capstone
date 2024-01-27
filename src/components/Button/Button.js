import styles from './Button.module.css';

export const Button = ({ txt = "Button Text" } ) => {
    return (
        <button className={styles.Button}>{txt}</button>
    );
}