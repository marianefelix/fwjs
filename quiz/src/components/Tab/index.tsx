import { useState } from "react";
import { CustomButton } from "../CustomButton";
import { DescriptionContainer } from "../DescriptionContainer";
import { Enunciation } from "../Enunciation";

import './styles.css';

interface TabProps {
    data: {
        title: string;
        description: string;
    }[];
}

export const Tab = ({ data }: TabProps) => {
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
            {data.map((tab, index) => (
                <CustomButton 
                    key={tab.description} 
                    title={tab.title}
                    selected={isTabSelected(index)}
                    onClick={() => tabOnClick(index)} 
                />
            ))}

            <DescriptionContainer>
                <Enunciation text={data[currentlySelectedTab].description} />
            </DescriptionContainer>
        </div>
    );
}