import { Fragment, useContext, useState } from "react";
import { TabContext } from "../../../contexts/TabContext";
import { 
    Container, 
    Title, 
    Tab, 
    ContentText, 
    TabPanel 
} from "./styles";


export const TabView = () => {
    const { tabList } = useContext(TabContext);
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
            {tabList.length === 0 ? (
                <Fragment>
                    <TabPanel>
                        <Tab 
                            selected={isTabSelected(0)} 
                            onClick={() => handleOnClick(0)}
                        >
                            Tab 1
                        </Tab>
                    </TabPanel>
                    <ContentText noContent>
                        Sem conteúdo
                    </ContentText>
                </Fragment>
            ) : (
                <Fragment>
                    <TabPanel>
                        {tabList.map((tabItem, index) => (
                            <Tab 
                                key={`tabItem-${index}`}
                                selected={isTabSelected(index)} 
                                onClick={() => handleOnClick(index)}
                            >
                                {tabItem.title}
                            </Tab>
                        ))}          
                    </TabPanel>
                    <ContentText>
                        {tabList[currentlySelectedTab].content}
                    </ContentText>
                </Fragment>
            )}
            
        </Container>
    );
}