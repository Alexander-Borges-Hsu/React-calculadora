import Icon from "./components/icon/Icon";
import Text from "./components/text/Text";
import Badge from "./components/badge/Badge"
import Button from "./components/button/Button";
import ButtonIcon from "./components/button/ButtonIcon";
import InputText from "./components/input/InputText";
import InputCheckBox from "./components/input/InputCheckBox";

export default function App() {

  return (
    <div className='grid gap-10'>
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
      </div>
      <div>
        <Button icon="Spinner">Nova tarefa</Button>
        <Button icon="Trash"></Button>
      </div>
      <hr />
      <div>
        <ButtonIcon variant={"primary"} icon="Check"/>
        <ButtonIcon variant={"secondary"} icon="Xregular"/>
        <ButtonIcon variant={"tertiary"} icon="Trash"/>
      </div>
      <div>
        <InputText/>
      </div>
      <hr />
      <div>
        <InputCheckBox/>
      </div>
    </div>
  )
}


