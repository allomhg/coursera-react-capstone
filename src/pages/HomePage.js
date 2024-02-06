import { Hero } from "../components/Hero/Hero";
import { Specials } from "../components/Specials/Specials";
import { Testimonials } from "../components/Testimonials";
import { About } from "../components/About";
import styles from './HomePage.module.scss';

export const HomePage = () => {
    return (
        <main className={styles.homePage}>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </main>
    );
}