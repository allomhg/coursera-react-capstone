import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.Hero}>
            <div>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <img src="/hero-image.jpg" alt="Itsa me! Mario!" id="hero-image"></img>
        </section>
    );
}