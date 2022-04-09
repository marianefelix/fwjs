import { useState } from "react";
import { CustomButton } from "../CustomButton";
import { DescriptionContainer } from "../DescriptionContainer";
import { Enunciation } from "../Enunciation";

import './styles.css';

const tabList = [
    {
        "title": "Tab 1",
        "description": "Texto 1",
    },
    {
        "title": "Tab 2",
        "description": "Texto 2",
    },
    {
        "title": "Tab 3",
        "description": "Texto 3",
    },
    {
        "title": "Tab 4",
        "description": "Texto 4",
    },
];

export const Tab = () => {
    const [currentlySelectedTab, setCurrentlySelectedTab] = useState(0);
    
    const tabOnClick = (tabIndex: number) => {
        setCurrentlySelectedTab(tabIndex)
    };

    const isTabSelected = (tabIndex: number) => {
        if (tabIndex === currentlySelectedTab) {
            return true;
        }

        return false;
    };

    return (
        <div className="tab-container">
            {tabList.map((tab, index) => (
                <CustomButton 
                    key={tab.description} 
                    title={tab.title}
                    selected={isTabSelected(index)}
                    onClick={() => tabOnClick(index)} 
                />
            ))}

            <DescriptionContainer>
                <Enunciation text={tabList[currentlySelectedTab].description} />
            </DescriptionContainer>
        </div>
    );
}