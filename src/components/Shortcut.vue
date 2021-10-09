<template>
    <a :href="shortcut.url" target="_blank" class="w-20 h-24 rounded-lg cursor-pointer hover:bg-white/10 flex flex-col items-center py-2 px-1">
        <img alt="Ícone do atalho" :src="shortcut.icon" class="w-12 mb-2"/>
        <p class="text-center text-white text-xs">{{ shortcut.title }}</p>
    </a>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import linkedin from '../assets/icons/linkedin.svg';
import ShortcutModel from '../models/ShortcutModel';

const Shortcut = defineComponent({
    props: {
        shortcut: {
            type: Object as PropType<ShortcutModel>,
            required: true
        }
    },
    setup() {
        return { linkedin };
    }
});

export default Shortcut;
</script>

<style>

</style>