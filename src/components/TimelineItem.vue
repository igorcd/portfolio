<template>
    <div class="flex items-center self-stretch mb-10 last:mb-0 relative z-10" :class="{'flex-row-reverse text-right': index % 2 == 0}">
            
        <!-- Tag -->
        <Tag tag="li" class="absolute -top-1.5" :class="[index % 2 == 0 ? '-right-8' : '-left-8']"/>

        <!-- Descrição -->
        <div class="flex-1 overflow-hidden">
            <p class="title">{{ title }}</p>
            <div class="h-px w-full bg-white/20 my-0.5"></div>
            <p class="subtitle">{{ subtitle }}</p>
        </div>

        <!-- Sistema -->
        <div class="w-12 h-12 rounded-full bg-center bg-cover bg-no-repeat shadow-100" :style="style"></div>

        <!-- Espaçador -->
        <div class="flex-1"></div>
    </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue';
import Tag from './Tag.vue';

const TimelineItem = defineComponent({
    components: { Tag },
    props: {
        icon: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        color: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const style = computed(() => {
            return {
                'background-image': `url('${props.icon}')`,
                'background-color': props.color
            };
        });

        return { style };
    }
});

export default TimelineItem;
</script>

<style>

</style>