import React from "react";
import ButtonIcon from "../components/button/ButtonIcon";
import Card from "../components/card/Card";
import InputCheckBox from "../components/input/InputCheckBox";
import Text from "../components/text/Text"
import InputText from "../components/input/InputText";
import Container from "../components/container/Container";

export default function TaskItem(){
    const [isEditing, setIsEditting] = React.useState(false); 

    function handleEditTask(){
        setIsEditting(true);
    }

    function handleExitTask(){
        setIsEditting(false);
    }

    return(
        <Card size={"md"} className="flex items-center gap-4 ">
            {isEditing == false ? 
                <>
                    <InputCheckBox/>
                    <Text className="flex-1">Fazer compras da semana</Text>
                    <Container className="flex gap-1">
                        <ButtonIcon icon="Trash" variant={"tertiary"}/>
                        <ButtonIcon icon="Pencil" onClick={() => handleEditTask()} variant={"tertiary"}/>
                    </Container>
                </> 
                :
                <>
                    <InputText className="flex-1"/>
                    <Container className="flex gap-1">
                        <ButtonIcon icon="Xregular" variant={"secondary"} onClick={() => handleExitTask()}/>
                        <ButtonIcon icon="Check" variant={"primary"}/>
                    </Container>
                </>

            }       
        </Card>
    )
}