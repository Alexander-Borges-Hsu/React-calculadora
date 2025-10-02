import Button from "../components/button/Button";
import Container from "../components/container/Container";
import Text from "../components/text/Text"
import useTask from "../hooks/use-task";
import useTasks from "../hooks/use-tasks";
import { TaskState, type Task } from "../models/task";
import TaskItem from "./TaskItem";

export default function TasksList(){
    const { tasks, isLoadingTasks} = useTasks();
    
    const {prepareTask} = useTask();

    function handleNewTask(){
        prepareTask();
    }
    
    return(
        <Container className="space-y-2">
            <section>
                <Button onClick={handleNewTask} 
                className="w-full"
                icon="Plus"
                disabled={tasks.some((task) => task.state === TaskState.Creating) || isLoadingTasks}
                >
                    <Text variant={"body-md-bold"}>
                        Nova Tarefa
                    </Text>
                </Button>
            </section>
            <section  className="space-y-2">
                {!isLoadingTasks && tasks.map((task) => <TaskItem key={task.id} task={task}/>)}
                {isLoadingTasks && <>
                    <TaskItem task={{} as Task} loading/>
                    <TaskItem task={{} as Task} loading/>
                    <TaskItem task={{} as Task} loading/>
                
                </>}
            </section>
        </Container>
    )
}