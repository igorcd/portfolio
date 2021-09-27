<template>
    <div class="flex flex-col items-center max-w-md mx-auto relative">
        <Tag tag="ul" :close="false" class="self-center mb-8"/>

        <div class="flex items-center self-stretch mb-10 last:mb-0 relative z-10" v-for="n in 4" :key="n" :class="{'flex-row-reverse text-right': n % 2 == 0}">
            
            <Tag tag="li" class="absolute -top-2.5" :class="[n % 2 == 0 ? '-right-8' : '-left-8']"/>

            <!-- Descrição -->
            <div class="flex-1">
                <p class="text-white font-semibold text-sm">Certfy Remote</p>
                <div class="h-px w-full bg-white/20 my-0.5"></div>
                <p class="text-white text-xs opacity-50 font-light">Vsoft Tecnologia</p>
            </div>

            <!-- Sistema -->
            <div class="w-10 h-10 rounded-full bg-gray-300"></div>

            <!-- Espaçador -->
            <div class="flex-1"></div>
        </div>

        <div class="absolute w-px bg-white/20 top-7 bottom-7"></div>

        <p class="text-white font-bold text-lg opacity-50 mt-3">2021</p>
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