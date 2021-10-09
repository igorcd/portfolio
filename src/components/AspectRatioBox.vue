<template>
    <div>
        <div :style="style" class="relative">
            <div class="absolute top-0 left-0 w-full h-full"></div>
        </div>
    </div>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType } from 'vue';

const AspectRatioBox = defineComponent({
    props: {
        aspect: {
            type: String as PropType<'16:9'| '16:10' | '3:4'>,
            default: '16:9'
        }
    },
    setup(props) {
        const style = computed(() => {
            const values = props.aspect.split(':');
            return {
                paddingTop: `${(+values[1] / +values[0]) * 100}%`
            };
        });

        return { style };
    }
});

export default AspectRatioBox;
</script>

<style>

</style>