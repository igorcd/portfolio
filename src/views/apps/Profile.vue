<template>
    <div class="pt-14  pb-24 sm:py-0">

        <!-- Header -->
            
        <div class="relative">
            <Container class="flex flex-col-reverse sm:flex-row text-center sm:text-left items-center sm:items-start pb-7 xl:pb-24 xl:pt-10 relative z-10">
                <div class="flex-1 pt-4 pr-0 sm:pr-8">
                    <Text type="body2" class="mb-1">{{ t('profile.title1') }}</Text>
                    <Text type="headline1" class="mb-1">{{ t('profile.title2') }}</Text>
                    <Text type="headline2" class="mb-6">{{ t('profile.subtitle') }}</Text>

                    <Divider class="mb-3"/>

                    <Text class="mb-6">{{ t('profile.subtitle2') }}</Text>

                    <div class="flex items-center justify-center sm:justify-start space-x-2">
                        <IconButton icon="github" color="white" size="1.75rem"/>
                        <IconButton icon="linkedin" color="white" size="1.75rem"/>
                    </div>
                </div>
                
                <!-- Avatar -->
                <img :src="profile"
                     alt="Avatar do usuário"
                     class="w-52"/>
            </Container>

            <!-- Gradiente -->
            <div class="absolute h-16 bg-gradient-to-b from-transparent to-neutral-900 bottom-0 left-0 w-full"></div>

        </div>

        <div class="bg-neutral-900">
            <Container>
                <TagContainer tag="h1" class="mb-4">
                    <Text type="headline3">{{ t('profile.welcomeTitle') }}</Text>
                </TagContainer>

                <TagContainer tag="p">
                    <Text>{{ t('profile.welcomeSubtitle') }}</Text>
                </TagContainer>

                <Divider class="my-10"/>

                <TagContainer tag="h1" class="mb-4">
                    <Text type="headline3">{{ t('profile.technicalExperience') }}</Text>
                </TagContainer>

                <div class="flex justify-center flex-wrap mx-auto mb-6" 
                     :style="{'max-width': (5 * 5) + 'rem'}">
                     
                    <Hexagon v-for="framework in frameworks"
                             :key="framework.title"
                             class="mx-1 mb-4 sm:mb-0"
                             :colors="framework.colors"
                             :icon="framework.icon"
                             :selected="state.currentFramework == framework.title"
                             @mouseenter="state.currentFramework = framework.title"/>
                </div>

                <div class="text-center mx-auto max-w-md h-28 relative">
                    <div v-for="framework in frameworks"
                         :key="framework.title"
                         class="absolute top-0 w-full transition-all duration-300"
                         :class="{'opacity-0 scale-90': state.currentFramework != framework.title}">

                        <Text type="headline2" class="mb-4">
                            {{ framework.title }}
                        </Text>
                        <Text>
                            {{ framework.description[locale] }}
                        </Text>

                    </div>
                </div>
                <Divider class="mt-9 mb-6"/>
            </Container>    

            <!-- Gradiente -->
            <div class="absolute h-16 bg-gradient-to-b to-transparent from-neutral-900 top-fiull left-0 w-full"></div>        
        </div>
        

        <Container>
            <TagContainer tag="h1" class="mb-4">
                <Text type="headline3">{{ t('profile.lastWorks') }}</Text>
            </TagContainer>

            <Timeline>

                <TimelineGroup v-for="group in groupedApps" :key="group.key" :title="group.key">
                    <TimelineItem v-for="(app, index) in group.apps"
                                  :key="app.id"
                                  :title="app.name"
                                  :subtitle="app.meta?.company"
                                  :icon="app.icon"
                                  :index="index"
                                  :color="app.foregroundColor"
                                  @onPress="openApp(app.id)"/>
                </TimelineGroup>
            </Timeline>

        </Container>

    </div>
</template>

<script lang='ts'>
import { computed, defineComponent, reactive } from 'vue';
import frameworks from '../../data/frameworks';
import apps from '../../data/apps';
import { profile } from '../../assets/img';
import { Divider, IconButton, Container, TagContainer, Hexagon, Text, Timeline, TimelineGroup, TimelineItem } from '../../components';
import AppModel from '../../models/AppModel';
import { useI18n } from 'vue-i18n';

const Profile = defineComponent({
    components: { Divider, IconButton, Container, TagContainer, Hexagon, Text, Timeline, TimelineGroup, TimelineItem },
    setup() {
        
        const state = reactive({
            currentFramework: frameworks[0].title
        });

        const { t, locale } = useI18n();

        const groupedApps = computed(() => {
            const groups = apps
                .filter(el => el.id != '-2')
                .reduce<{key: number; apps: AppModel[]}[]>((acc, el) => {
                const group = acc.find(g => g.key == el.meta!.year);
                group ?
                    group.apps.push(el)
                    : acc.push({ key: el.meta!.year, apps: [el] });

                return acc;
             
            }, []);

            return groups.sort((a, b) => b.key - a.key);
        });

        const openApp = (id: string) => {
            const e = new  CustomEvent("emit", { detail: { type: "openApp", params: id } });
            window.dispatchEvent(e);
        };

        return { profile, frameworks, groupedApps, state, t, locale, openApp };
    }
});

export default Profile;
</script>

<style>

</style>