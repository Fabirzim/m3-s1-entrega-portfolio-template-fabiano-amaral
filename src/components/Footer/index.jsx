
import Footers from "./../../assets/whatsapp-icon.png"
import FootersTwo from "./../../assets/linkedin-icon.png"
import FootersThree from "./../../assets/github-icon.png"

import styles from "./style.module.css";

export const Footer = () => {
    return (
        <footer> 
                <div className={styles.container}>
                    <div className={styles.flexBox}>
                        <h2 className="title2">Contato</h2>
                        <p className="title__footer">Todos os direitos reservados - José da Silva</p>
                    </div>
                    <img className={styles.img__footer} src={Footers} alt="Footer"></img>
                    <img className={styles.img__footer} src={FootersTwo} alt="Footer"></img>
                    <img className={styles.img__footer} src={FootersThree} alt="Footer"></img>
                </div>
        </footer>
    )
}