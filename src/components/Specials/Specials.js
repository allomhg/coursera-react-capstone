import { Button } from '../../components/Button/Button';
import { MenuCard } from '../MenuCard/MenuCard';

export const Specials = () => {
    return (
        <section>
            <div>
                <h2>This weeks specials!</h2>
                <Button txt="Online Menu" />
            </div>
            <div className="CardContainer">
                <MenuCard />
                <MenuCard />
                <MenuCard />
            </div>
        </section>
    );
}