import { Hero } from "../components/Hero";
import { Specials } from "../components/Specials";
import { Testimonials } from "../components/Testimonials";

export const HomePage = () => {
    return (
        <div>
            <Hero />
            <Specials />
            <Testimonials />
        </div>
    );
}