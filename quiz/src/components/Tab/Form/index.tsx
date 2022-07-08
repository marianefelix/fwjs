import { Input } from "../../Input";
import { TextArea } from "../../TextArea";
import { Divider, Form, FormGroup, Label, SaveButton, Container, Title } from "./styles";

export const TabForm = () => {
    return (
        <Container>
            <Title>
                Tabs
            </Title>
            <Form>
                <FormGroup>
                    <Label>Núm. tabs</Label>
                    <Input type="number" min={0} name="tabsNumber" />
                </FormGroup>
                <Divider />
                <FormGroup>
                    <Label>Título</Label>
                    <Input type="text" name="tabTitle" />
                </FormGroup>
                <FormGroup>
                    <Label>Conteúdo</Label>
                    <TextArea name="tabContent" />
                </FormGroup>
                <SaveButton type="submit" onClick={() => {}}>
                    Salvar
                </SaveButton>
            </Form>
        </Container>
    );
};