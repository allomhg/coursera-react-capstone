import styles from './MenuCard.module.scss';

export const MenuCard = () => {
    return (
        <div className={styles.MenuCard} >
            <img src="/" alt="Tasty lookin' food" className={styles.MenuImg} />
            <div>
                <h3>Menu Item Title</h3>
                <p>Price</p>
            </div>
            <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    );
}