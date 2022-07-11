<script setup lang="ts">
    import  { type TabItemType, tabStore } from '@/store/TabStore.store';
    import { reactive, ref } from 'vue';

    const tabListFormDefaultValue: TabItemType[] = [
        {
            title: '',
            content: ''
        },
    ];

    const tabsNumber = ref<number | undefined>(1);
    const tabsNumberErrorMessage = ref<string | undefined>();
    let tabListForm = reactive<TabItemType[]>(
        tabListFormDefaultValue
    );

    const getNewTabItems = (newTabsNumber: number): TabItemType[] => {
        const newTabList = [];
        const condition = newTabsNumber;

        for (let i = 0; i < condition; i++) {
            newTabList.push({
                title: '',
                content: ''
            });
        }

        return newTabList;
    };

    const handleTabsNumberOnChange = (value: string) => {
        const newTabsNumber = value !== '' ? Number(value) : undefined;

        if (newTabsNumber === 0) {
            tabsNumberErrorMessage.value = 'Deve haver pelo menos uma aba';
        } else if (newTabsNumber) {
            tabListForm = [...getNewTabItems(newTabsNumber)];
            tabsNumberErrorMessage.value = undefined;
            tabStore.clearErrors();
        } else {
            tabsNumberErrorMessage.value = undefined;
        }

        tabsNumber.value = newTabsNumber;
    };

      const handleTabListFormOnChange = (
        index: number, 
        key: keyof TabItemType,
        value: string
    ) => {
        tabListForm[index][key] = value;
    };

    const isSaveButtonDisabled = () => {
        if (tabListForm.length > 0 &&
            tabListForm[0].title === '' &&
            tabListForm[0].content === ''
        ) {
            return true;
        }

        return false;
    };

    const clearState = () => {
        tabsNumber.value = 1;
        tabListForm = [
            {
                title: '',
                content: '',
            }
        ];
    };

    const handleOnSubmit = () => {
        const response = tabStore.saveTabList(tabListForm);

        if (response === 'success') {
            clearState();
        }
    };

    const inputError = (index: number, key: keyof TabItemType) => {
        if (tabStore.errors[index] && tabStore.errors[index][key] !== '') {
            return {
                hasError: true,
                errorMessage: tabStore.errors[index][key],
            };
        }

        return {
            hasError: false,
            errorMessage: undefined,
        };
    };
</script>
<template>
    <div class="container">
        <h3>
            Tabs
        </h3>
        <form @submit.prevent="handleOnSubmit">
            <div class="form-group">
                <label>Núm. tabs</label>
                <input 
                    type="number"
                    name="tabsNumber"
                    min="0"
                    :value="tabsNumber"
                    @change="handleTabsNumberOnChange(($event.target as HTMLInputElement).value)"
                />
                <small v-if="tabsNumberErrorMessage">
                    {{tabsNumberErrorMessage}}
                </small>
            </div>
            <hr />
            <fragment v-for="tabItem, index in tabListForm">
                <div class="form-group">
                <label>Título</label>
                    <input 
                        type="text" 
                        :name="`title-${index}`"
                        :index="index"
                        :value="tabItem.title"
                        @change="handleTabListFormOnChange(index, 'title', ($event.target as HTMLInputElement).value)"
                    />
                    <small v-if="inputError(index, 'title').hasError">
                        {{inputError(index, 'title').errorMessage}}
                    </small>
                </div>
                <div class="form-group">
                    <label>Conteúdo</label>
                    <textarea 
                        :name="`content-${index}`"
                        :index="index"
                        :value="tabItem.content"
                        @change="handleTabListFormOnChange(index, 'content', ($event.target as HTMLInputElement).value)"
                    ></textarea>
                    <small v-if="inputError(index, 'content').hasError">
                        {{inputError(index, 'content').errorMessage}}
                    </small>
                </div>
            </fragment>
            <button 
                type="submit"
                :disabled="isSaveButtonDisabled()"
            >
                Salvar
            </button>
        </form>
    </div>
</template>

<style scoped src="./styles.css"></style>