import { CustomButton } from "../CustomButton";
import { DescriptionContainer } from "../DescriptionContainer";
import { Enunciation } from "../Enunciation";

import './styles.css';

export const Tab = () => {
    return (
        <div className="tab-container">
            <CustomButton title="Tab 1" onClick={() => {}} />
            <CustomButton title="Tab 2" onClick={() => {}} />
            <CustomButton title="Tab 3" onClick={() => {}} />
            <CustomButton title="Tab 4" onClick={() => {}} />

            <DescriptionContainer>
                <Enunciation text="Texto teste" />
            </DescriptionContainer>
        </div>
    );
}