<template>
    <div class="flex">
        <div class="w-4 h-4 bg-white/10 rounded-full mx-1 cursor-pointer transition-colors duration-150 hover:bg-white/40"
             @click="$emit('minimize')">
            <Icon size="1rem" icon="minimize" color="white"/>
        </div>

        <div class="w-4 h-4 bg-white/10 rounded-full mx-1 cursor-pointer transition-colors duration-150 hover:bg-white/40"
             @click="$emit('maximize')">
            <Icon size="1rem" icon="maximize" color="white"/>
        </div>

        <div class="w-4 h-4 bg-white/10 rounded-full mx-1 cursor-pointer transition-colors duration-150 hover:bg-white/40"
             @click="$emit('close')">
            <Icon size="1rem" icon="close" color="white"/>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Icon from './Icon.vue';

const WindowControl = defineComponent({
    components: { Icon }
});

export default WindowControl;
</script>

<style>

</style>