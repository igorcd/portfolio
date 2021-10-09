<template>
    <div class="flex items-stretch min-h-screen">

        <!-- Menu -->
        <div class="w-48 sm:w-52 fixed sm:static top-0 left-0 z-0">
            <div class="sticky top-8">
                <a href="#bem-vindo" class="menu-item">Bem-vindo</a>
                <a href="#navegando" class="menu-item">Navegando entre os apps</a>
                <a href="#menus" class="menu-item">Menus</a>
                <a href="#feedback" class="menu-item">Feedback</a>
            </div>
        </div>

        <!-- Conteúdo -->
        <div class="w-full sm:w-[calc(100%-12rem)] bg-neutral-900 rounded-lg overflow-hidden shadow-xl relative z-10  sm!:translate-x-0 transition-transform duration-300"
             id="bem-vindo"
             :class="{'translate-x-48': state.menuOpened}">

            <header class="bg-cover relative h-60 sm:h-32 lg:h-40 bg-center flex flex-col items-center sm:items-end justify-center px-7"
                    :style="{'background-image': `url('${welcomeBg}')`}">

                <div class="absolute top-3 left-3 transition-transform duration-300 sm:hidden" :class="{'rotate-90': state.menuOpened}">
                    <IconButton icon="menu" color="white" size="1.5rem" @click="state.menuOpened = !state.menuOpened"/>
                </div>

                <div class="text-center sm:text-right">
                    <Text type="headline2">Igor Dantas</Text>
                    <Text class="mb-3">Desenvolvedor de sistemas</Text>
                    <div class="flex justify-center sm:justify-end space-x-2 ">
                        <IconButton icon="github" color="white" size="1.5rem"/>
                        <IconButton icon="linkedin" color="white" size="1.5rem"/>
                    </div>
                </div>
                    
                <!-- Gradiente -->
                <div class="absolute bottom-0 h-8 right-0 w-full bg-gradient-to-b from-gray-900/0 to-gray-900 ">
                </div>
            </header>

            <div class="mx-auto max-w-3xl relative p-6">
                <Text type="headline1" class="mb-3" >Bem-vindo!</Text>
                <Text>Esse sistema foi desenvolvido de forma a demonstrar todo o trabalho desenvolvido que desenvolvi durante meu trajeto como desenvolvedor front-end. Tudo foi feito com muito carinho :)Espero que goste!</Text>

                <Divider class="mt-8 mb-3"/>

                <Text type="headline2" class="mb-3" id="navegando">Navegando entre os apps</Text>
                <Text class="mb-4">O sistema foi desenvolvivo de forma a simular um sistema operacional, onde cada APP represente um projeto desenvolvido, você pode visualizar todos os projetos abrindo o a “Central de Apps” ou selecionando alguns dos apps fixados.</Text>
                <img alt="Imagem da navegação" :src="centralApps" class="w-72 max-w-full mx-auto"/>

                <Divider class="mt-8 mb-3"/>

                <div class="flex flex-col items-stretch  md:flex-row-reverse" id="menus">
                    <div class="md:text-right mb-3 md:ml-8">
                        <Text type="headline2" class="mb-3">Menus</Text>
                        <Text class="mb-4">Cada app possui um menu com as mais variadas funcionalidades, você pode, por exemplo, maximizar a jenela, ou abrir a sua página na Google Play ou AppStore.</Text>
                    </div>

                    <img alt="Imagem do menu" :src="menus" class="rounded-xl w-full md:w-80"/>
                </div>

                <Divider class="mt-8 mb-3"/>


                <Text type="headline2" class="mb-3" id="feedback">Feedback</Text>
                <Text class="mb-4 max-w-md">Você pode nos enviar um feedback sobre algum problema, ou até mesmo enviar sugestões sobre o sistema, ou de meu trabalho em geral. Desde já agradeço a sua visita 😄</Text>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue';
import { welcomeBg, avatar, centralApps, menus } from '../../assets/img';
import { Divider, Text, IconButton } from '../../components';

const Welcome = defineComponent({
    components: { Text, IconButton, Divider },
    setup() {
        const images = {
            welcomeBg, avatar, centralApps, menus
        };

        const state = reactive({
            menuOpened: false
        });
        return { ...images, state };
    }
});

export default Welcome;
</script>

<style>

</style>