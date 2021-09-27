<template>
    <p class="text-xs text-white font-bold">{{ time }}</p>
</template>

<script lang='ts'>
import { format } from 'date-fns';
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';

const Clock = defineComponent({
    setup() {
        const time = ref(format(new Date(), 'HH:mm'));

        const setTime = () => {
            time.value = format(new Date(), 'HH:mm');
        };

        let clockInterval: ReturnType<typeof setTimeout>;

        const setTimeInterval = () => {
            const today = new Date();
            const milisecondsToNextMinute = 60000 -( (today.getSeconds() * 1000) + today.getMilliseconds());

            setTimeout(() => {
                setTime();
                clockInterval = setInterval(() =>  {
                    setTime();
                }, 60000);
            }, milisecondsToNextMinute);
        };

        onMounted(() => setTimeInterval());

        onBeforeUnmount(() => clearInterval(clockInterval));

        return { time };
    }
});

export default Clock;
</script>

<style>

</style>