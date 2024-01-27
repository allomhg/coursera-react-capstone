import styles from './Hero.module.css';
import { Button } from '../../components/Button/Button';

export const Hero = () => {
    return (
        <section className={styles.Hero} id="Hero">
            <div>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button txt="Reserve a Table" />
            </div>
            <img src="/hero-image.jpg" alt="Itsa me! Mario!" id="hero-image" className={styles.HeroImg}></img>
        </section>
    );
}