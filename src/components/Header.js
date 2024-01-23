// import './src/css/Header.css';
import { Nav } from "./Nav";


export const Header = () => {
    return (
        <header class="Header">
            <img src="/Logo.svg" alt="Little Lemon Logo"></img>
            <Nav />
        </header>
    );
}