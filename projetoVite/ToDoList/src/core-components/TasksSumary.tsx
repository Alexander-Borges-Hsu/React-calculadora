import Badge from "../components/badge/Badge";
import Container from "../components/container/Container";
import Text from "../components/text/Text"

export default function TaskSumary(){
    return(
        <Container className="flex items-center justify-between">
            <Container className="flex-1 items-center gap-2">
                <Text variant={"body-sm-bold"} className="!text-gray-300">Tarefas criadas</Text>
                <Badge variant={"secondary"}>5</Badge>
            </Container>
            <Container className="flex items-center gap-2">
                <Text variant={"body-sm-bold"} className="!text-gray-300">Concluídas</Text>
                <Badge variant={"primary"}>2 de 5</Badge>
            </Container>
        </Container>
    )
}