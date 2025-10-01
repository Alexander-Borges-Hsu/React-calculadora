import Container from "../components/container/Container";
import Logo from "../assets/iconsSite/Logo.svg?react"

export default function Header(){
    return(
        <Container as="header" className="mt-3:mt-20">
            <Logo className="h-9 md:h-12" />       
        </Container>
    )
}