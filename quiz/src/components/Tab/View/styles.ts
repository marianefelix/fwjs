import styled from "styled-components";

interface TabType {
  selected: boolean;
}

interface ContentTextType {
  noContent?: boolean;
}

export const Container = styled.div`
  width: 50%;

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

export const TabPanel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 10px;
`;

export const Tab = styled.button<TabType>`
  width: fit-content;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: ${(props) => props.selected ? '#424242' : '#9E9E9E'};

  padding: 12px 16px;
  border-bottom: ${(props) => props.selected ? '3px solid #5A3FE0' : 'none'};
  background-color: transparent;
`;

export const ContentText = styled.p<ContentTextType>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: ${(props) => props.noContent ? '#757575' : '#424242;'}
`;