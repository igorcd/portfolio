import MenuModel from "./MenuModel";

export default interface AppModel {
    id: string;
    foregroundColor: string;
    stackPosition: number;
    url: string;
    name: string;
    icon: string;
    favicon: string;
    menus: MenuModel[];
    options: {
        maximized: boolean;
        minimized: boolean;
        pinned: boolean;
    }
    meta: {
        logo: string;
        description: {
            pt: string;
            en: string;
        };
        tecnologies: string[];
        year: number;
        company: string;
        platforms: {
            phone: boolean;
            tablet: boolean;
            desktop: boolean;
            web: boolean;
        }
        pictures: {
            sm: string[];
            md: string[];
            lg: string[];
            xl: string[];
        },
        role: {
            pt: string;
            en: string;
        }
        urls: {
            website: string,
            googlePlay: string,
            appStore: string
        },
        relatedApps: string[]
    },
}