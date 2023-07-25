import Cards from "./../../assets/git-icon.png"
import styles from "./style.module.css";

export const ProductSection = () => {
    return (
        <section>
            <div className="container">
                <h1 className="title2">Projetos</h1>
                <div className={styles.flexBox}>
                    <div className="cardProject">
                        <div className={styles.title}>
                            <h2 className="title3">Projeto 1</h2>
                            <img src={Cards} alt="Cards"></img>
                        </div>
                        <p className="paragraph">Descrição do projeto</p>
                        <a href="#" className="title5">Saiba mais</a>
                    </div>
                    <div className="cardProject">
                        <div className={styles.title}>
                            <h2 className="title3">Projeto 2</h2>
                            <img src={Cards} alt="Cards"></img>
                        </div>
                        <p className="paragraph">Descrição do projeto</p>
                        <a href="#" className="title5">Saiba mais</a>
                    </div>
                    <div className="cardProject">
                        <div className={styles.title}>
                            <h2 className="title3">Projeto3</h2>
                            <img src={Cards} alt="Cards"></img>
                        </div>
                        <p className="paragraph">Descrição do projeto</p>
                        <a href="#" className="title5">Saiba mais</a>
                    </div>
                    <div className="cardProject">
                        <div className={styles.title}>
                            <h2 className="title3">Projeto 4</h2>
                            <img src={Cards} alt="Cards"></img>
                        </div>
                        <p className="paragraph">Descrição do projeto</p>
                        <a href="#" className="title5">Saiba mais</a>
                    </div>
                </div>


            </div>
        </section>
    )
}