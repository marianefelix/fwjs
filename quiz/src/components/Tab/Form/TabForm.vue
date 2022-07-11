<script setup lang="ts">
    import Input from '@/components/Input/Input.vue';
    import TextArea from '@/components/TextArea/TextArea.vue';
    import type { TabItemType } from '@/store/TabStore';
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
            const newTabList = [...getNewTabItems(newTabsNumber)];

            tabListForm = newTabList;
            tabsNumberErrorMessage.value = undefined;
        } else {
            tabsNumberErrorMessage.value = undefined;
        }

        tabsNumber.value = newTabsNumber;
    };
</script>
<template>
    <div class="container">
        <h3>
            Tabs
        </h3>
        <form>
            <div class="form-group">
                <label>Núm. tabs</label>
                <Input 
                    type="number"
                    name="tabsNumber" 
                    value="2"
                ></Input>
            </div>
            <hr />
            <div class="form-group">
                <label>Título</label>
                <Input 
                    type="text" 
                    name="title" 
                    value="a"
                ></Input>
            </div>
            <div class="form-group">
                <label>Conteúdo</label>
                <TextArea 
                    name="content" 
                    value="a"
                ></TextArea>
            </div>
            <button 
                type="submit"
                disabled="false"
            >
                Salvar
            </button>
        </form>
    </div>
</template>

<style scoped src="./styles.css"></style>