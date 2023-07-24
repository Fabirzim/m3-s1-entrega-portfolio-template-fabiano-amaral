import { BannerSection } from "../../components/BannerSection"
import { CategorySection } from "../../components/Sobre"
import { NewsletterSection } from "../../components/Tecnologias"
import { Footer } from "../../components/Footer"
import { ProductSection } from "../../components/Projetos"
import { Header } from "../../components/Header"

export const HomePage = () =>{
    return(
        <>
        <Header></Header>
        <main>
            <BannerSection></BannerSection>
            <CategorySection></CategorySection>
            <NewsletterSection></NewsletterSection>
            <ProductSection></ProductSection>
        </main>
        <Footer></Footer>
        </>
    )
}