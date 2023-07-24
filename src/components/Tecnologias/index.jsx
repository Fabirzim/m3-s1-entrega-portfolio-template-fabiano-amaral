import styles from "./style.module.css";
import Card from "./../../assets/html-icon.png"
import Card2 from "./../../assets/css-icon.png"
import Card3 from "./../../assets/js-icon.png"
import Card4 from "./../../assets/react-icon.png"




export const NewsletterSection = () => {
    return (
        <section>
            <div className="container">

                <h1 className="title2">Tecnologias</h1>
                <div className={styles.flexBox}>
                    <div className="card title3"><img src={Card} alt="Banner"></img>HTML</div>
                    <div className="card title3"><img src={Card2} alt="Banner"></img>CSS</div>
                    <div className="card title3"><img src={Card3} alt="Banner"></img>Javascript</div>
                    <div className="card title3"><img src={Card4} alt="Banner"></img>React</div>
                </div>
            </div>
        </section>
    )
}