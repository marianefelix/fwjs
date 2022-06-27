import styled from "styled-components";

export const TabContainer = styled.div`
    width: 50%;
    min-height: 296px;

    display: flex;
    flex-direction: column;
    padding: 24px;

    background: #FFFFFF;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
`;

export const Title = styled.h3`
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;

    color: #424242;
    margin: 0;
    margin-bottom: 10px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Label = styled.label`
    width: fit-content;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    
    color: #424242;
    text-align: right;
`;

export const FormGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const Divider = styled.hr`
    width: 100%;
    height: 0px;

    border-bottom: 2px solid #A5A5A5;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
`;

export const SaveButton = styled.button`
    width: 69px;
    height: 36px;

    display: flex;
    align-self: end;
    gap: 4px;

    padding: 8px 16px;
    border-radius: 4px;

    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    background: #7B61FF;
    border: none;
    color: white;

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        background: #F5F5F5;
        cursor: default;
        color: #C2C2C2;
    }
`;