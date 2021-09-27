<template>
    <div class="bg-center bg-cover bg-no-repeat rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center"
         :style="[{'background-image': `url(${image})`}, { 'width': size }, {'height': size}]">
        <p class=" text-lg font-semibold opacity-80">{{ initials }}</p>
    </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue';

const CircleAvatar = defineComponent({
    props: {
        image: {
            type: String,
        },
        size: {
            type: String,
            default: '2.75rem'
        },
        name: {
            type: String
        }
    },
    setup(props) {
        const initials = computed(() => {
            if(props.name) {
                const splited = props.name.split(' ');
                return splited.length > 1 ? splited[0].charAt(0).toUpperCase() + splited[splited.length - 1].charAt(0).toUpperCase() : splited[0].substring(0,2).toUpperCase();
            }
            return '';
        });
        return { initials };
    }
});

export default CircleAvatar;
</script>

<style>

</style>