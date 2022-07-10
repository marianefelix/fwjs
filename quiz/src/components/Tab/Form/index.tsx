import { Fragment, useContext, useEffect, useState } from "react";
import { TabContext, TabItemType } from "../../../contexts/TabContext";
import { Input } from "../../Input";
import { TextArea } from "../../TextArea";
import { 
    Divider, 
    Form, 
    FormGroup, 
    Label, 
    SaveButton, 
    Container, 
    Title 
} from "./styles";

const tabListFormDefaultValue: TabItemType[] = [
    {
        title: '',
        content: ''
    },
];

export const TabForm = () => {
    const { saveTabList, errors, setErrors } = useContext(TabContext);
    const [tabsNumber, setTabsNumber] = useState<number | undefined>(1);
    const [tabsNumberErrorMessage, setTabsNumberErrorMessage] = 
        useState<string | undefined>();
    const [tabListForm, setTabListForm] = useState<TabItemType[]>(
        tabListFormDefaultValue
    );

    const getNewTabItems = (newTabsNumber: number): TabItemType[] => {
        const newTabList = [];
        const condition = newTabsNumber;

        for (let i = 0; i < condition; i++) {
            newTabList.push({
                title: '',
                content: ''
            });
        }

        return newTabList;
    };

    const handleTabsNumberOnChange = (value: string) => {
        const newTabsNumber = value !== '' ? Number(value) : undefined;

        if (newTabsNumber === 0) {
            setTabsNumberErrorMessage('Deve haver pelo menos uma aba');
        } else if (newTabsNumber) {
            const newTabList = [...getNewTabItems(newTabsNumber)];

            setTabListForm(newTabList);
            setTabsNumberErrorMessage(undefined);
            setErrors([
                {
                    title: '',
                    content: ''
                }
            ]);
        } else {
            setTabsNumberErrorMessage(undefined);
        }

        setTabsNumber(newTabsNumber);
    };

    const handleTabListFormOnChange = (
        index: number, 
        key: keyof TabItemType, 
        value: string
    ) => {
        const newTabList: TabItemType[] = [...tabListForm];
        newTabList[index][key] = value;

        setTabListForm(newTabList);
    };

    const isSaveButtonDisabled = () => {
    
        if (tabListForm.length > 0 && 
            tabListForm[0].title === '' &&
            tabListForm[0].content === ''
        ) {
            return true;
        }

        return false;
    };

    const clearState = () => {
        setTabsNumber(1);
        setTabListForm([
            {
                title: '',
                content: '',
            }
        ]);
    };

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = saveTabList(tabListForm);
        console.log(response);

        if (response === 'success') {
            clearState();
        }
    };

    return (
        <Container>
            <Title>
                Tabs
            </Title>
            <Form onSubmit={(event) => handleOnSubmit(event)}>
                <FormGroup>
                    <Label>Núm. tabs</Label>
                    <Input 
                        type="number"
                        min={0}
                        name="tabsNumber" 
                        value={tabsNumber}
                        errorMessage={tabsNumberErrorMessage}
                        onChange={(event) => 
                            handleTabsNumberOnChange(event.target.value)
                        }
                    />
                </FormGroup>
                <Divider />
                {tabListForm.map((tabItem, index) => (
                    <Fragment key={`tabItem-${index}`}>
                        <FormGroup>
                            <Label>Título</Label>
                            <Input 
                                type="text" 
                                name={`tabTitle-${index}`} 
                                value={tabItem.title}
                                errorMessage={errors[index] && errors[index].title}
                                onChange={(event) => 
                                    handleTabListFormOnChange(
                                        index, 
                                        'title', 
                                        event.target.value
                                    )
                                }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Conteúdo</Label>
                            <TextArea 
                                name={`tabContent-${index}`} 
                                value={tabItem.content}
                                errorMessage={errors[index] && errors[index].content}
                                onChange={(event) => 
                                    handleTabListFormOnChange(
                                        index, 
                                        'content', 
                                        event.target.value
                                    )
                                }
                            />
                        </FormGroup>
                    </Fragment>
                ))}
                <SaveButton 
                    type="submit" 
                    disabled={isSaveButtonDisabled()}
                >
                    Salvar
                </SaveButton>
            </Form>
        </Container>
    );
};