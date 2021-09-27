<template>
    <div class="bg-white/30" :class="type == 'horizontal' ? 'h-px w-full my-2' : 'mx-2 w-px h-4'"></div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';

const Divider = defineComponent({
    props: {
        type: {
            type: String as PropType<'vertical' | 'horizontal'>,
            default: 'horizontal'
        }
    }
});

export default Divider;
</script>

<style>

</style>