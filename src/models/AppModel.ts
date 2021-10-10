import MenuModel from './MenuModel';

export default interface AppModel {
    id: string;
    foregroundColor: string;
    stackPosition: number;
    name: string;
    icon: string;
    favicon: string;
    url: string;
    options: {
        pinned: boolean;
        maximized: boolean;
        minimized: boolean
    };
    meta: {
        header: {
            image: string;
            author: string;
            source: string;
        };
        company: string;
        year: number;
        logo: string;
        description: {
            pt: string;
            en: string;
        };
        tecnologies: string[];
        platforms: {
            phone: boolean;
            tablet: boolean;
            desktop: boolean;
            web: boolean
        };
        pictures: {
            sm: string[];
            md: string[];
            lg: string[];
            xl: string[];
        };
        urls: {
            website: string;
            googlePlay: string;
            appStore: string;
        };
        role: {
            pt: string;
            en: string;
        };
        relatedApps: string[]
    };
    menus: MenuModel[]
}