import { useState } from "react";
import { Container, Title, Tab, ContentText, TabPanel } from "./styles";


export const TabView = () => {
    const [currentlySelectedTab, setCurrentlySelectedTab] = useState(0);
    
    const handleOnClick = (tabIndex: number) => {
        setCurrentlySelectedTab(tabIndex)
    };

    const isTabSelected = (tabIndex: number) => {
        if (tabIndex === currentlySelectedTab) {
            return true;
        }

        return false;
    };

    return (
        <Container>
            <Title>Conteúdo</Title>
            <TabPanel>
                <Tab selected={isTabSelected(0)} onClick={() => handleOnClick(0)}>Tab 1</Tab>
                <Tab selected={isTabSelected(2)} onClick={() => handleOnClick(2)}>Tab 2</Tab>
            </TabPanel>
            <ContentText noContent>
                Sem conteúdo
            </ContentText>
        </Container>
    );
}