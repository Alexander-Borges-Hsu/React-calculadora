import React from "react";
import ButtonIcon from "../components/button/ButtonIcon";
import Card from "../components/card/Card";
import InputCheckBox from "../components/input/InputCheckBox";
import Text from "../components/text/Text"
import InputText from "../components/input/InputText";
import Container from "../components/container/Container";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";
import Skeleton from "../components/skeleton/Skeleton";

interface TaksItemProps{
    task: Task;
    loading?: boolean;
}

export default function TaskItem({task, loading}: TaksItemProps){
    const [isEditing, setIsEditting] = React.useState(task.state === TaskState.Creating); 
    const [taskTitle, setTaskTitle] = React.useState(task.title || "");
    const {updateTask, updateTaskStatus, deleteTask, isUpdatingTask, isDeletingTask} = useTask();

    function handleEditTask(){
        setIsEditting(true);
    }

    function handleExitTask(){
        if(task.state === TaskState.Creating){
            deleteTask(task.id);
        }
        
        setIsEditting(false);
    }

    function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>){
        setTaskTitle(e.target.value || "");
    }

    async function handleSaveTask(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        await updateTask(task.id, {title: taskTitle})
        setIsEditting(false);
    }

    function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>){
        const checked = e.target.checked;
        updateTaskStatus(task.id, checked);
    }

    async function handleClickDeletTask(){
        await deleteTask(task.id);
    }


    return(
        <form onSubmit={handleSaveTask}>
            <Card size={"md"} className="flex items-center gap-4 ">
                {isEditing == false ? 
                    <>
                        <InputCheckBox 
                            value={task.conclued?.toString()} 
                            checked={task?.conclued}
                            onChange={handleChangeTaskStatus}    
                            loading={loading}
                        />
                        {!loading ?
                            <Text className={cx("flex-1",{
                                "line-through": task?.conclued,
                            })}>{task?.title}</Text>
                        :
                            <>
                                <Skeleton className="flex-1 h-6"/>
                            </>
                        }
                        <Container className="flex gap-1">
                            <ButtonIcon handling={isDeletingTask} loading={loading} type="button" icon="Trash" onClick={handleClickDeletTask} variant={"tertiary"}/>
                            <ButtonIcon loading={loading} type="button" icon="Pencil" onClick={() => handleEditTask()} variant={"tertiary"}/>
                        </Container>
                    </> 
                    :
                    <>
                        <InputText value={taskTitle} className="flex-1" onChange={handleChangeTaskTitle} required autoFocus/>
                        <Container className="flex gap-1">
                            <ButtonIcon type="button" icon="Xregular" variant={"secondary"} onClick={() => handleExitTask()}/>
                            <ButtonIcon handling={isUpdatingTask} type="submit" icon="Check" variant={"primary"}/>
                        </Container>
                    </>

                }       
            </Card>
        </form>
    )
}