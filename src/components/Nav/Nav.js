import "./Nav.css"
import { Link } from "react-router-dom";
const navLinks = [
    ["Home", "/"],
    ["About", "/about"],
    ["Menu", "/menu"],
    ["Reservations", "/reservations"],
    ["Order Online", "/order-online"],
    ["Login", "/login"]
];

export const Nav = () => {
    return (
        <nav>
            <ul>
                {navLinks.map((link) => (
                    <li classlink="list-item" key={link} id={link} title={link}>
                        {/* <a href="#">{link}</a> */}
                        <Link to="/">{link[0]}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}