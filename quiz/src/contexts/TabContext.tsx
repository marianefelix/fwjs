import { createContext, ReactNode, useState } from "react";


interface TabContextProviderProps {
  children: ReactNode;
}

export interface TabItemType {
  title: string;
  content: string;
}

interface TabContextType {
  tabList: TabItemType[];
  errors: TabItemType[];
  saveTabList: (newTabList: TabItemType[]) => void;
  setErrors: (newErrors: TabItemType[]) => void;
}

export const TabContext = createContext({} as TabContextType);

export const TabContextProvider = ({children}: TabContextProviderProps) => {
  const [tabList, setTabList] = useState<TabItemType[]>([]);
  const [errors, setErrors] = useState<TabItemType[]>([]);

  const isTabListValid = (newTabList: TabItemType[]) => {
    let isValid = true;
    const newErrors: TabItemType[] = [];

    newTabList.forEach((newTabItem) => {
      const newErrorItem = {} as TabItemType;
      if (newTabItem.title === '') {
        newErrorItem.title = 'É necessário informar o título da aba';
        isValid = false;
      } else {
        newErrorItem.title = '';
      }

      if (newTabItem.content === '') {
        newErrorItem.content = 'É necessário informar o conteúdo da aba';
        isValid = false;
      } else {
        newErrorItem.content = '';
      }

      newErrors.push(newErrorItem);
    });

    if (isValid) {
      setErrors([]);
    } else {
      setErrors(newErrors);
    }
  
    return isValid;
  };

  const saveTabList = (newTabList: TabItemType[]) => {
    if (isTabListValid(newTabList)) {
      setTabList(newTabList);
    }
  };

  return (
    <TabContext.Provider
      value={{
        tabList,
        errors,
        saveTabList,
        setErrors,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};