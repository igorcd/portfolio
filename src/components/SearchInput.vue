<template>
    <div class="w-64 h-8 rounded-lg  bg-white/10 border border-white/20 flex items-center px-3">
        <Icon icon="search" class="fill-current text-white" size="1rem"/>
        <input class="bg-transparent flex-1 text-sm px-3 font-light outline-none text-white "
               :placeholder="placeholder"
               v-model="handleInput"/>
    </div>

</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue';
import Icon from './Icon.vue';

const SearchInput = defineComponent({
    props: {
        modelValue: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        }
    },
    components: { Icon },
    setup(props, ctx) {
        const handleInput = computed({
            get: () => props.modelValue,
            set: (value: string) => ctx.emit('update:modelValue', value)
        });

        return { handleInput };
    }
});

export default SearchInput;
</script>

<style>

</style>