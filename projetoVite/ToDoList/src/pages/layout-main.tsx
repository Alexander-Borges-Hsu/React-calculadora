import Header from "../core-components/Header";
import MainContent from "../core-components/MainContent"
import Footer from "../core-components/Footer";
import Container from "../components/container/Container";

export default function LayoutMain(){
    return(
        <Container className={`m-9`}>
            <Header/>
            <MainContent/>
            <Footer/>
        </Container>
    )
}