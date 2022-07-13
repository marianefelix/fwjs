<script setup lang="ts">
    import  { type TabItemType, type TabListType, tabStore } from '@/store/TabStore.store';
    import { reactive, ref } from '@vue/reactivity';

    const tabListFormDefaultValue: TabListType = {
        0: {
            title: '',
            content: ''
        }
    };

    const tabsNumber = ref<number | undefined>(1);
    const tabsNumberErrorMessage = ref<string | undefined>();
    const tabListForm = reactive<TabListType>(
        tabListFormDefaultValue
    );

    const setNewTabItems = (newTabsNumber: number) => {
        const condition = newTabsNumber;

        if (newTabsNumber === 1) {
            Object.keys(tabListForm).forEach((_, index) => {
                delete tabListForm[index];
            });
        }

        for (let i = 0; i < condition; i++) {
            tabListForm[i] = {
                title: '',
                content: ''
            };
        }
    };

    const handleTabsNumberOnChange = (value: string) => {
        const newTabsNumber = value !== '' ? Number(value) : undefined;

        if (newTabsNumber === 0) {
            tabsNumberErrorMessage.value = 'Deve haver pelo menos uma aba';
        } else if (newTabsNumber) {
            setNewTabItems(newTabsNumber);
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
        if (Object.keys(tabListForm).length > 0 &&
            tabListForm[0].title === '' &&
            tabListForm[0].content === ''
        ) {
            return true;
        }

        return false;
    };

    const clearState = () => {
        tabsNumber.value = 1;
        tabListForm[0] = 
            {
                title: '',
                content: '',
            }
        ;
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
                    <div class="input-area">
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
                </div>
                <div class="form-group">
                    <label>Conteúdo</label>
                    <div class="input-area">
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