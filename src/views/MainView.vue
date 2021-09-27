<template>
    <div class="h-screen bg-center bg-cover bg-no-repeat main-view">

        <!-- Status Bar -->
        <StatusBar/>

        <!-- Widget Data -->
        <div class="absolute w-full sm:w-auto sm:right-9 top-32 sm:top-20 flex flex-col items-center sm:items-end">
            <p class="text-white text-2xl">{{ date }}</p>
            <div class="flex items-center mb-2">
                <p class="text-white font-bold text-lg">{{ state.temperature || '-'}}°</p>
                <Icon icon="cloud-sun" size="1.5rem" color="white"/>
            </div>
            <p class="text-xs text-white font-light opacity-80">Desenvolvido por Igor Dantas</p>
            <p class="text-xs text-white font-light opacity-80">EM DESENVOLVIMENTO</p>
        </div>

        <!-- Créditos imagem -->
        <div class="absolute w-full sm:w-auto sm:right-9 bottom-32 sm:bottom-72 flex flex-col items-center sm:items-end">
            <p class="text-xs text-white font-light opacity-80">Foto por Ian Beckley</p>
        </div>

        <!-- Apps -->
        <transition-group name="app">
            <Window v-for="(app, index) in vm.openedApps" 
                    :key="app.id"
                    :index="app.stackPosition"
                    :url="app.url"
                    v-model:maximized="app.maximized"
                    v-model:minimized="app.minimized"
                    @focus="vm.focusApp(app.stackPosition)"
                    @close="vm.closeApp(index)">
            </Window>
        </transition-group>


        <div class="h-15 rounded-full  bg-white/40 fixed bottom-6 left-1/2 -translate-x-1/2 backdrop-blur-md flex items-center px-1.5 space-x-0.5 z-30">
            <AppButton v-for="app in vm.apps" :key="app.id"
                       :app="app" 
                       :opened="vm.openedApps.includes(app)"
                       :focused="vm.focusedApp.id == app.id"
                       @pressed="vm.openApp(app)"/>
        </div>
    </div>
</template>

<script lang='ts'>
import format from 'date-fns/format/index';
import { pt } from 'date-fns/locale';
import { computed, defineComponent, onMounted, reactive } from 'vue';
import { AppButton, Window, Icon } from '../components';
import vm from '../viewModels/AppsViewModel';
import StatusBar from './StatusBar.vue';
import { titleCase } from '../utils/stringFunctions';
import IpStackService from '../services/ipStackService';
import openWeatherService from '../services/openWeatherService';

const MainView = defineComponent({
    components: { AppButton, Window, StatusBar, Icon },
    setup() {
        const state = reactive({
            temperature: 0
        });

        const today = new Date();

        const date = computed(() => {
            return titleCase(format(today, "E, dd 'de' MMMM", { locale: pt }));
        });

        const getWeatherForecast = async () => {
            try {
                const [request] = IpStackService.getCurrentIp();
                const coordenates = await request;

                const [weatherRequest] = openWeatherService.getCurrentWeather({ lat: coordenates.latitude, lon: coordenates.longitude });
                const weatherData = await weatherRequest;
                state.temperature =  Math.trunc(weatherData.main.temp);
            } catch (error) {
                console.log(error);
            }
        };

        onMounted(() => getWeatherForecast());

        return { vm, date, state };
    }
});

export default MainView;
</script>

<style>
.main-view {
    background-image: url('/img/bg-hor.jpg');
}

@media (orientation: portrait) {
    .main-view {
      background-image: url('/img/bg-ver.jpg');
    }
}
</style>