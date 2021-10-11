<template>
    <div class="h-screen ">
        <!-- Background -->
        <div class="fixed top-0 right-0 w-full h-screen bg-center bg-cover bg-no-repeat main-view z-[-1]"></div>

        <!-- Status Bar -->
        <StatusBar  :class="{'opacity-0': state.collectionOpened}"/>

        <!-- Widget Data -->
        <div class="absolute w-full sm:w-auto sm:right-9 top-24 sm:top-20 flex flex-col items-center sm:items-end">
            <p class="text-white text-2xl">{{ date }}</p>
            <div class="flex items-center mb-2">
                <p class="text-white font-bold text-lg">{{ state.temperature || '-'}}°</p>
                <Icon icon="cloud-sun" size="1.5rem" color="white"/>
            </div>
            <p class="text-xs text-white font-light opacity-80">Desenvolvido por Igor Dantas</p>
        </div>

        <!-- Créditos imagem -->
        <div class="absolute w-full sm:w-auto sm:right-9 bottom-32 sm:bottom-72 flex flex-col items-center sm:items-end">
            <a class="text-xs text-white font-light opacity-80" target="_blank" href="https://www.pexels.com/pt-br/foto/fotografia-aerea-da-formacao-rochosa-2440079/">Foto por Ian Beckley</a>
        </div>

        <!-- Apps -->
        <transition-group name="app">
            <Window v-for="(app, index) in vm.openedApps" 
                    :app="app"
                    :key="app.id"
                    :index="app.stackPosition"
                    :url="app.url"
                    :class="{'opacity-0': state.collectionOpened}"
                    :splashScreen="app.icon"
                    :inFocus="app.id == vm.focusedApp.id"
                    v-model:maximized="app.options.maximized"
                    v-model:minimized="app.options.minimized"
                    @focus="vm.focusApp(app.stackPosition)"
                    @close="vm.closeApp(index)">
            </Window>
        </transition-group>


        <transition-group name="list-complete" tag="div"
                          id="task-bar"
                          class="task-bar hidden-scroll"
                          :style="{'width': `${8 + (52 * vm.taskBarApps.length)}px`}"
                          :class="{'opacity-0': state.collectionOpened}">
                          
            <AppButton v-for="app in vm.taskBarApps" :key="app.id"
                       :aria-label="'Aplicativo ' + app.name"
                       :app="app" 
                       :opened="vm.openedApps.includes(app)"
                       :focused="vm.focusedApp.id == app.id"
                       @pressed="openApp(app.id)"/>
        </transition-group>

        <transition name="fade">
            <CollectionView v-if="state.collectionOpened"
                            @close="state.collectionOpened = false"
                            @openApp="vm.openApp($event.id)"/>

        </transition>

        <div class="hidden sm:flex flex-col flex-wrap h-screen content-start py-20 px-12 gap-4">
            <Shortcut v-for="shortcut in shortcuts" :key="shortcut.title" :shortcut="shortcut"/>
        </div>
    </div>
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted, reactive } from 'vue';
import format from 'date-fns/format';
import { pt } from 'date-fns/locale';
import { titleCase } from '../utils/stringFunctions';

// Componentes
import { AppButton, Window, Icon, Shortcut } from '../components';
import StatusBar from './StatusBar.vue';
import CollectionView from './collection/CollectionView.vue';

// Serviços e DTOS
import vm from '../viewModels/AppsViewModel';
import ipService from '../services/ipService';
import openWeatherService from '../services/openWeatherService';

const MainView = defineComponent({
    components: { AppButton, Window, StatusBar, Icon, CollectionView, Shortcut },
    setup() {
        const state = reactive({
            temperature: 0,
            collectionOpened: false
        });

        const today = new Date();

        const date = computed(() => {
            return titleCase(format(today, "E, dd 'de' MMMM", { locale: pt }));
        });

        const shortcuts = computed(() => vm.shortcuts);
        const getWeatherForecast = async () => {
            try {
                const [request] = ipService.getCurrentIp();
                const coordenates = await request;

                const [weatherRequest] = openWeatherService.getCurrentWeather({ lat: coordenates.latitude, lon: coordenates.longitude });
                const weatherData = await weatherRequest;
                state.temperature =  Math.trunc(weatherData.main.temp);
            } catch (error) {
                console.log(error);
            }
        };

        const openApp = (appId: string) => {
            appId == '-3' ? state.collectionOpened = true : vm.openApp(appId);
        };

        onMounted(() => getWeatherForecast());

        return { vm, date, state, openApp, shortcuts };
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