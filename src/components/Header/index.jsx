
import styles from "./style.module.css";

export const Header = () => {
    return (
        <header className={styles.bannerSection}>
        <div className="container">
            <div className={styles.flexBox}>
            <h2 className="title4">Portfólio</h2>
            <h2 className="title4">Sobre</h2>
            <h2 className="title4">Stack</h2>
            <h2 className="title4">Projetos</h2>
            <button type="submit" className="btn">Contato</button>

            </div>
            </div>
        </header>
    )
}

