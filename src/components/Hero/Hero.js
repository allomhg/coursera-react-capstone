import styles from './Hero.module.scss';
import { Button } from '../../components/Button/Button';

export const Hero = () => {
    return (
        <section className={styles.hero} id="hero">
            <div className={styles["hero-div"]}>
                <h2 className={styles["hero-heading"]}>Little Lemon</h2>
                <h3>Chicago</h3>
                <p className={styles["hero-text"]}>
                    We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.
                </p>
                <Button txt="Reserve a Table" />
            </div>
            <div className={styles["hero-bg"]}></div>
            <img src="/hero-image.jpg" alt="Itsa me! Mario!" id="hero-image" className={styles["hero-img"]}></img>
        </section>
    );
}