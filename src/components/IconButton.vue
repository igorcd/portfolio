<template>
    <button class="rounded-full active:bg-white active:bg-opacity-30 flex items-center justify-center"
            @click="$emit('pressed')">
        <Icon :icon="icon" :size="size" :color="color"/>
    </button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Icon from './Icon.vue';

const IconButton = defineComponent({
    props: {
        icon: {
            type: String,
            required: true
        },
        color: {
            type: String
        },
        size: {
            type: String,
            default: '2.5rem' 
        },
    },
    components: { Icon }

});

export default IconButton;
</script>

<style>

</style>