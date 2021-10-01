<template>
    <div class="collection-view light-scroll">

        <div class="flex items-center space-x-2 justify-center mb-8 md:mb-16">
            <Button class="w-8" @click="$emit('close')">
                <Icon icon="arrowLeft" color="white" class="opacity-70" size="1.5rem"/>
            </Button>
            <SearchInput/>
        </div>         

        <div class="mx-auto max-w-2xl grid grid-cols-4 md:grid-cols-5  md:gap-x-10 gap-y-8 md:gap-y-14 px-3">
            <CollectionApp v-for="(app, index) in allApps" :key="app.id" :app="app"
                           @click="$emit('openApp', app); $emit('close')"
                           class="collection-app opacity-0"
                           :style="{'animation-delay': `${50 * index}ms`}"/>
            
        </div>
    </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue';
import { Icon, SearchInput, Button } from '../../components';
import CollectionApp from './CollectionApp.vue';

import apps from '../../data/apps';

const CollectionView = defineComponent({
    components: { SearchInput, CollectionApp, Icon, Button },
    setup() {
        const allApps = computed(() => apps.filter(app => app.id != '-3'));
        return { allApps };
    }
});

export default CollectionView;
</script>

<style>
@keyframes showApp {
    from { 
        opacity: 0;
        transform: scale(.9)
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.collection-app {
    animation: showApp .5s forwards;
}
</style>