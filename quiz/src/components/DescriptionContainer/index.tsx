import { ReactNode } from 'react';

import './styles.css';

interface DescriptionContainerProps {
    children: ReactNode;
}

export const DescriptionContainer = ({ children }: DescriptionContainerProps) => {
    return (
        <div className="description-container">
            {children}
        </div>
    );
}