import Badge from "../components/badge/Badge";
import Button from "../components/button/Button";
import ButtonIcon from "../components/button/ButtonIcon";
import Card from "../components/card/Card";
import Container from "../components/container/Container";
import Icon from "../components/icon/Icon";
import InputCheckBox from "../components/input/InputCheckBox";
import InputText from "../components/input/InputText";
import Skeleton from "../components/skeleton/Skeleton";
import Text from "../components/text/Text"

export default function PageComponents(){
    return (
    <Container>
      <div className='flex flex-col gap-1'>
        <Text as="span" className={`text-pink-base`} variant={"body-sm-bold"}>Levar dog para passear</Text>
        <Text>Ir pra academia</Text>
        <Text variant={"body-md-bold"}>Estudar para inglês</Text>
      </div>

      <div className={`flex gap-1`}>
        <Icon variant={"icon-md-bold"} variantIcon="Check"/>
        <Icon variant={"icon-md-bold"} variantIcon="Spinner"/>
      </div>
      <div className={`flex gap-1`}>
        <Badge>
          5
        </Badge>
        <Badge variant={"secondary"}>
          2 de 5
        </Badge>
        <Badge loading variant={"none"}>5</Badge>
      </div>
      <div>
        <Button icon="Spinner">Nova tarefa</Button>
        <Button icon="Trash"></Button>
      </div>
      <hr />
      <div className="flex gap-1">
        <ButtonIcon loading variant={"primary"} icon="Check"/>
        <ButtonIcon variant={"secondary"} icon="Xregular"/>
        <ButtonIcon variant={"tertiary"} icon="Trash"/>
      </div>
      <div>
        <InputText/>
      </div>
      <hr />
      <div>
        <InputCheckBox/>
        <InputCheckBox loading/>
      </div>
      <div>
        <Card size={"md"}>
          Ola mundo
        </Card>
      </div> 
      <div className="space-y-2">
        <Skeleton className="h-6"/>
        <Skeleton className="h-6"/>
        <Skeleton className="w-96 h-6"/>
      </div>
    </Container>
  )
}