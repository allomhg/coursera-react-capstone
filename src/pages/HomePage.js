import { Hero } from "../components/Hero";
import { Specials } from "../components/Specials";
import { Testimonials } from "../components/Testimonials";
import { About } from "../components/About";

export const HomePage = () => {
    return (
        <main>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </main>
    );
}