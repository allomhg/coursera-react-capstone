import styles from './Header.module.css';
import { Nav } from "../Nav/Nav";

export const Header = () => {
    return (
        <header className={styles.Header}>
            <img src="/Logo.svg" alt="Little Lemon Logo"></img>
            <Nav />
        </header>
    );
}