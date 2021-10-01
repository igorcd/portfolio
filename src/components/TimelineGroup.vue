<template>
    <div class="flex flex-col items-center w-full relative pt-7">

        <slot/>

        <div class="absolute w-px bg-white/20 top-1 bottom-8"></div>

        <p class="text-white font-bold text-lg opacity-50 mt-3">{{ title }}</p>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const TimelineGroup = defineComponent({
    props: {
        title: {
            type: [String, Number],
            required: true
        }
    }
});

export default TimelineGroup;
</script>

<style>

</style>