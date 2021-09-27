<template>
    <Text type="tag">{{ `&lt;${tag + (close ? '/' : '')}&gt;` }}</Text>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Text from './Text.vue';

const Tag = defineComponent({
    components: { Text },
    props: {
        tag: {
            type: String,
            required: true
        },
        close: {
            type: Boolean,
            default: true
        }
    }
});

export default Tag;
</script>

<style>

</style>