import { createContext, ReactNode, useState } from "react";


interface TabContextProviderProps {
  children: ReactNode;
}

interface TabItemType {
  title: string;
  content: string;
}

interface TabContextType {
  tabList: TabItemType[];
}

export const TabContext = createContext({} as TabContextType);

export const TabContextProvider = ({children}: TabContextProviderProps) => {
  const [tabList, setTabList] = useState<TabItemType[]>([]);

  return (
    <TabContext.Provider
      value={{
        tabList,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};