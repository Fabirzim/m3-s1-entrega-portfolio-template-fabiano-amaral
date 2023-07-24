import Banner from "./../../assets/banner.png"
import styles from "./style.module.css";


export const BannerSection = () => {
    return (
        <section>
            <div className="container">
                <div className={styles.flexBox}>
                    <h1 className="title1">Bem vindo ao meu portfólio</h1>
                    <img src={Banner} alt="Banner"></img>
                </div>
                <div className={styles.paragraph}>
                    <p className="paragraph">Uma frase interessante sobre mim</p>
                    <button type="submit" className="btn">Saiba mais</button>
                </div>
            </div>
        </section>
    )
}