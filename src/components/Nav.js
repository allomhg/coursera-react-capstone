
const navLinks = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];

export const Nav = () => {
    return (
        <nav>
            <ul>
                {navLinks.map((name) => (
                    <li key={name} id={name} title={name}>
                        <a href="#">{name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}