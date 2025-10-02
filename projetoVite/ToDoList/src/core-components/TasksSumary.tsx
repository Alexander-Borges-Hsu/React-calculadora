import Badge from "../components/badge/Badge";
import Container from "../components/container/Container";
import Text from "../components/text/Text"
import useTasks from "../hooks/use-tasks";

export default function TaskSumary(){
    const { tasksCount, concluedTasksCount, isLoadingTasks} = useTasks();

    return(
        <Container className="flex items-center justify-between">
            <Container className="flex-1 items-center gap-2">
                <Text variant={"body-sm-bold"} className="!text-gray-300">Tarefas criadas</Text>
                <Badge loading={isLoadingTasks} variant={"secondary"}>{tasksCount}</Badge>
            </Container>
            <Container className="flex items-center gap-2">
                <Text variant={"body-sm-bold"} className="!text-gray-300">Concluídas</Text>
                <Badge loading={isLoadingTasks} variant={"primary"}>{concluedTasksCount} de {tasksCount}</Badge>
            </Container>
        </Container>
    )
}