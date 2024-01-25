import styles from './Header.module.css';
import { Nav } from "../Nav/Nav";

export const Header = () => {
    return (
        <header className="Header">
            <img src="/Logo.svg" alt="Little Lemon Logo"></img>
            {/* <p className={styles.redText}>red text</p> */}
            <Nav />
        </header>
    );
}