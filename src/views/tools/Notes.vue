<template>
    <div class="h-screen flex flex-col items-stretch">

        <!-- Header -->
        <header class="flex items-center pl-10 mb-2">
            <Tab v-for="(document,index) in app.documents"
                 :key="index" :selected="state.selectedDocument == index">
                {{ document.title }}
            </Tab>
        </header>

        <!-- Conteúdo -->
        <div class="flex-1 overflow-hidden relative" v-if="selectedDocumentContent">

            <!-- Background -->
            <div class="absolute left-10 right-0 top-0 bottom-0 bg-neutral-900 rounded-lg"></div>
            
            <div class="absolute top-0 right-0 left-0 bottom-0 overflow-auto">

                <div class="flex min-h-full items-stretch">

                    <!-- Linhas -->
                    <div class="w-10 pr-3 pt-2">
                        <div class="text-white text-right text-sm opacity-80 font-light leading-6" v-for="n in selectedDocumentLines" :key="n">{{ n }}</div>
                    </div>

                    <div class="rounded-md py-2 px-4 flex-1" >
                        <span class="text-white text-sm font-light whitespace-pre-wrap">{{ selectedDocumentContent }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Placeholder -->
        <div class="flex-1 flex items-center justify-center" v-else>
            <p class="text-white font-semibold opacity-40 text-3xl">Ta meio vazio por aqui 😀</p>
        </div>

        <!-- Footer -->
        <footer class="bg-neutral-900 rounded-t-lg h-6 ml-10 flex items-center justify-end px-4 mt-2">
            <p class="text-white text-xs font-light" v-if="selectedDocumentContent">{{ selectedDocumentContent.length }} caracteres</p>
        </footer>
    </div>
</template>

<script lang='ts'>
import { computed, defineComponent, reactive } from 'vue';
import { Tab } from '../../components';
import NotesModel from '../../models/NotesModel';

interface NotesState {
    selectedDocument: number;
}

const Notes = defineComponent({
    components: { Tab },
    setup() {

        /** Referencia ao aplicativo */
        const app = (window as any).app as NotesModel;

        const state = reactive<NotesState>({
            selectedDocument: 0
        });

        const selectedDocumentContent = computed(() => app.documents[state.selectedDocument]?.content);
        const selectedDocumentLines = computed(() => selectedDocumentContent.value?.split('\n').length || 0);

        return { state, selectedDocumentContent, selectedDocumentLines, app };
    }
});

export default Notes;
</script>

<style>

</style>