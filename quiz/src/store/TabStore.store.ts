import { reactive } from "vue";

export interface TabItemType {
  title: string;
  content: string;
}

export interface TabListType {
  [key: number]: TabItemType
}

interface TabStoreType {
    tabList: TabListType;
    errors: TabItemType[];
    saveTabList: (newTabList: TabListType) => 'success' | 'error';
    clearErrors: () => void;
}

const isTabListValid = (newTabList: TabListType) => {
  let isValid = true;
  const newErrors: TabItemType[] = [];

  Object.keys(newTabList).forEach((_, index) => {
    const newErrorItem = {} as TabItemType;
    if (newTabList[index].title === '') {
      newErrorItem.title = 'É necessário informar o título da aba';
      isValid = false;
    } else {
      newErrorItem.title = '';
    }

    if (newTabList[index].content === '') {
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
    tabList: reactive<TabListType>({}),
    errors: reactive<TabItemType[]>([]),

    saveTabList: (newTabList: TabListType) => {
        const validation = isTabListValid(newTabList);

        if (validation.isValid) {
            tabStore.tabList = {...tabStore.tabList, ...newTabList};
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