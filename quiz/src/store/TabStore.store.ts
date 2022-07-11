import { reactive } from "vue";

export interface TabItemType {
    title: string;
    content: string;
}

interface TabStoreType {
    tabList: TabItemType[];
    errors: TabItemType[];
    saveTabList: (newTabList: TabItemType[]) => 'success' | 'error';
    clearErrors: () => void;
}

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
  
    return { isValid, newErrors };
}

export const tabStore = reactive<TabStoreType>({
    tabList: reactive<TabItemType[]>([]),
    errors: reactive<TabItemType[]>([]),

    saveTabList: (newTabList: TabItemType[]) => {
        const validation = isTabListValid(newTabList);

        if (validation.isValid) {
            tabStore.tabList = [...tabStore.tabList, ...newTabList];
            tabStore.errors = [];

            return 'success';
        }

        tabStore.errors = validation.newErrors;
        return 'error';
    },

    clearErrors: () => {
        tabStore.errors = [
            {
                title: '',
                content: ''
            }
        ];
    },
});