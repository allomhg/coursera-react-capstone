import styles from './Hero.module.scss';
import { Button } from '../../components/Button/Button';

export const Hero = () => {
    return (
        <section className={styles.hero} id="Hero">
            <div className={styles.heroDiv}>
                <h2 className={styles.heroHeading}>Little Lemon</h2>
                <h3>Chicago</h3>
                <p className={styles.heroText}>
                    We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.
                </p>
                <Button txt="Reserve a Table" />
            </div>
            <div className={styles.backDiv}></div>
            <img src="/hero-image.jpg" alt="Itsa me! Mario!" id="hero-image" className={styles.heroImg}></img>
        </section>
    );
}