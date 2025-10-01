import { NavLink } from "react-router";
import Container from "../components/container/Container";
import Text from "../components/text/Text";

export default function Footer(){
    return(
        <Container>
            <footer className="my-5 md:my-10">
                <nav className="flex items-center justify-center gap-4">
                    <NavLink to="/">
                        <Text variant={"body-sm-bold"} className="text-gray-300">
                            Tarefas
                        </Text>
                    </NavLink>
                    <NavLink to="/components">
                        <Text variant={"body-sm-bold"} className="text-gray-300">
                            Componentes
                        </Text>
                    </NavLink>                                      
                </nav>
            </footer>
        </Container>
    )
}