<template>
    <div class="flex flex-col items-center max-w-md mx-auto px-4">
        <Tag tag="ul" :close="false" class="self-center mb-2"/>
        <slot/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Tag from './Tag.vue';

const Timeline = defineComponent({
    components: { Tag }
});

export default Timeline;
</script>

<style>

</style>