<template>
    <div class="h-10 rounded-md bg-neutral-900 min-w-[10rem] flex items-center px-2 mr-2 opacity-60"
         :class="{'border-b-2 border-white !opacity-100': selected}">
        <Icon icon="file" color="white" size="1.25rem"/>
        <p class="text-white flex-1 text-sm font-semibold pl-2 pr-6">
            <slot/>
        </p>
        <IconButton icon="times" color="white" size="1rem"/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Icon from './Icon.vue';
import IconButton from './IconButton.vue';

const Tab = defineComponent({
    props: {
        selected: {
            type: Boolean,
            required: true
        }
    },
    components: { Icon, IconButton }
});

export default Tab;
</script>

<style>

</style>