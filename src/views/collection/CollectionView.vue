<template>
    <div class="collection-view light-scroll">

        <div class="flex items-center space-x-2 justify-center mb-8 md:mb-16">
            <Button class="w-8" @click="$emit('close')">
                <Icon icon="arrowLeft" color="white" class="opacity-70" size="1.5rem"/>
            </Button>
            <SearchInput :placeholder="t('collection.search')" v-model="search"/>
        </div>         

        <div class="mx-auto max-w-2xl grid grid-cols-4 md:grid-cols-5  md:gap-x-10 gap-y-8 md:gap-y-14 px-3">
            <CollectionApp v-for="(app, index) in allApps" :key="app.id" :app="app"
                           @click="$emit('openApp', app); $emit('close')"
                           class="collection-app opacity-0"
                           :style="{'animation-delay': `${50 * index}ms`}"/>

            
        </div>
        <Text type="body" class="mx-auto text-center" v-if="allApps.length == 0">{{ t('collection.notFound') }}</Text>
    </div>
</template>

<script lang='ts'>
import { computed, defineComponent, ref } from 'vue';
import { Icon, SearchInput, Button, Text } from '../../components';
import CollectionApp from './CollectionApp.vue';

import apps from '../../data/apps';
import { useI18n } from 'vue-i18n';

const CollectionView = defineComponent({
    components: { SearchInput, CollectionApp, Icon, Button, Text },
    setup() {
        const { t } = useI18n();
        const search = ref("");

        const allApps = computed(() =>  {
            return search.value.length > 0
                ? apps.filter(app => app.name.toLowerCase().includes(search.value.toLowerCase()) && app.id != '-3')
                : apps.filter(app => app.id != '-3');
        });


        return { allApps, search, t };
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