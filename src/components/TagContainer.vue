<template>
    <div class="relative pl-8">
        <slot/>
        <Tag :tag="tag" class="absolute -top-2.5 left-0 tag"/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Tag from './Tag.vue';

const TagContainer = defineComponent({
    components: { Tag },
    props: {
        tag: {
            type: String,
            default: 'p'
        }
    }
});

export default TagContainer;
</script>

<style>

</style>