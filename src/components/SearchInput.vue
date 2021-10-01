<template>
    <div class="w-64 h-8 rounded-lg  bg-white/10 border border-white/20 flex items-center px-3">
        <Icon icon="search" class="fill-current text-white" size="1rem"/>
        <input class="bg-transparent flex-1 text-sm px-3 font-light outline-none text-white "
               placeholder="Pesquisar um aplicativo"/>
    </div>

</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Icon from './Icon.vue';

const SearchInput = defineComponent({
    components: { Icon }
});

export default SearchInput;
</script>

<style>

</style>