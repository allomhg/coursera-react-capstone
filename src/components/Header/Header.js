import './Header.css';
import { Nav } from "../Nav/Nav";

export const Header = () => {
    return (
        <header className="Header">
            <img src="/Logo.svg" alt="Little Lemon Logo"></img>
            <Nav />
        </header>
    );
}