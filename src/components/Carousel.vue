<template>
    <div class="relative flex items-center">
        <Button type="round" class="absolute left-0 z-10 touch:hidden" @click="navigate('prev')">
            <Icon icon="angleLeft" color="white" size="1.5rem"/>
        </Button>

        <div class="carousel hidden-scroll" ref="carouselRef">
            <slot/>
        </div>
        
        <Button type="round" class="absolute right-0 touch:hidden" @click="navigate('next')">
            <Icon icon="angleRight" color="white" size="1.5rem"/>
        </Button>
    </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue';
import Button from './Button.vue';
import Icon from './Icon.vue';

const Carousel = defineComponent({
    components: { Button, Icon },
    setup() {
        const carouselRef = ref<HTMLDivElement | null>(null);
        let children: HTMLElement[] = [];

        const navigate = (direction: 'next' | 'prev') => {
            const carousel = carouselRef.value!;
            
            if(direction == 'next') {
                const inTheEnd = carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth) - 20;
                if(inTheEnd) {
                    carousel.scrollLeft = 0;
                }
                else {
                    const el = children.find(el => el.offsetLeft >= carousel.scrollLeft + 20);
                    carousel.scrollLeft = el ? el.offsetLeft - 16 : 0;
                }
            }
            else {
                const els = children.filter(el => el.offsetLeft < carousel.scrollLeft - 20);
                const el = els[els.length - 1];
                carousel.scrollLeft = el ? el.offsetLeft - 16 : carousel.scrollWidth;
            }
        };

        onMounted(() => {
            children = Array.from(carouselRef.value?.children || []) as HTMLElement[];
        });

        return { carouselRef, navigate };
    }
});

export default Carousel;
</script>

<style>

</style>