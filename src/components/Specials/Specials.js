import { Button } from '../../components/Button/Button';
import { MenuCard } from '../MenuCard/MenuCard';
import styles from './Specials.module.scss';

export const Specials = () => {
    return (
        <section className={styles.specialsContainer}>
            <div className={styles.specialsHeader}>
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