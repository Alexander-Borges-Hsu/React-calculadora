import Button from "../components/button/Button";
import Container from "../components/container/Container";
import Text from "../components/text/Text"
import useTasks from "../hooks/use-tasks";
import TaskItem from "./TaskItem";

export default function TasksList(){
    const { tasks } = useTasks();
    console.log(tasks);
    
    return(
        <Container className="space-y-2">
            <section>
                <Button className="w-full" icon="Plus">
                    <Text variant={"body-md-bold"}>
                        Nova Tarefa
                    </Text>
                </Button>
            </section>
            <section  className="space-y-2">
                <TaskItem/>
                <TaskItem/>
                <TaskItem/>
            </section>
        </Container>
    )
}