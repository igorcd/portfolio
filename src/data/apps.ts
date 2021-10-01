import AppDTO from "../dtos/AppDTO";
import welcomeApp from './welcomeApp';

const apps: AppDTO[] = [
    // Certfy ID
    {
        id: '1',
        foregroundColor: '#005961',
        stackPosition: 0,
        name: 'Certfy ID',
        icon: 'https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/icons%2Fcertfyid.svg?alt=media',
        favicon: 'https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/favicons%2Fcertfyid.svg?alt=media',
        url: '/development',
        options: {
            pinned: true,
            maximized: false,
            minimized: false,
        },
        meta: {
            company: "Vsoft Tecnologia",
            year: 2021
        },
        menus: [
            {
                title: 'Inicio',
                icon: 'home',
                options: [
                    {
                        title: "Fechar",
                        action: () => console.log("Fechar")
                    },
                ],
            },
            {
                title: 'Janela',
                icon: 'window',
                options: [
                    {
                        title: 'Minimizar',
                        action: () => console.log("minimizar")
                    },
                    {
                        title: 'Ampliar/Reduzir',
                        action: () => console.log("minimizar")
                    },
                ]
            },
            {
                title: 'Sobre',
                icon: 'info',
                options: [
                    {
                        title: "Link do site",
                        action: () => console.log("123")
                    },
                    {
                        title: "Link na Play Store",
                        action: () => console.log("123")
                    },
                    {
                        title: "Link na App Store",
                        action: () => console.log("123")
                    },
                ]
            }
        ],
    },
    // Pilotar
    {
        id: '2',
        foregroundColor: '#363738',
        stackPosition: 0,
        name: 'Pilotar',
        icon: 'https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/icons%2Fpilotar.svg?alt=media',
        favicon: 'https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/favicons%2Fpilotar.svg?alt=media',
        options: {
            pinned: false,
            maximized: false,
            minimized: false,
        },
        url: '/development',
        meta: {
            company: "Vsoft Tecnologia",
            year: 2021
        },
        menus: [
            {
                title: 'Inicio',
                icon: 'home',
                options: [
                    {
                        title: "Fechar",
                        action: () => console.log("Fechar")
                    },
                ],
            },
            {
                title: 'Janela',
                icon: "window",
                options: [
                    {
                        title: 'Minimizar',
                        action: () => console.log("minimizar")
                    },
                    {
                        title: 'Ampliar/Reduzir',
                        action: () => console.log("minimizar")
                    },
                ]
            },
            {
                title: 'Sobre',
                icon: 'info',
                options: [
                    {
                        title: "Link do site",
                        action: () => console.log("123")
                    },
                    {
                        title: "Link na Play Store",
                        action: () => console.log("123")
                    },
                    {
                        title: "Link na App Store",
                        action: () => console.log("123")
                    },
                ]
            }
        ],
    },
    // SuperPrático Gestor
    {
        id: "4",
        foregroundColor: '#FF6C18',
        name: "SuperPrático Gestor",
        favicon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/favicons%2Fgestor.svg?alt=media",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/icons%2Fgestor.svg?alt=media",
        options: {
            pinned: true,
            maximized: false,
            minimized: false,
        },
        menus: [],
        meta: {
            company: "Vsoft Tecnologia",
            year: 2021
        },
        stackPosition: 0,
        url: "/development",
    },
    {
        favicon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/favicons%2Flighteam.svg?alt=media",
        foregroundColor: "#F0F0F1",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/icons%2Fcollection.svg?alt=media",
        id: "-3",
        menus: [],
        meta: {
            company: "",
            year: 2021
        },
        name: "Collection",
        options: {
            maximized: false,
            minimized: true,
            pinned: true
        },
        stackPosition: 0,
        url: "/development",
    },
    // Portal Red
    {
        id: "10",
        foregroundColor: '#E31E26',
        name: "Portal Red",
        favicon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/favicons%2Fportalred.svg?alt=media",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/icons%2Fportalred.svg?alt=media",
        options: {
            pinned: true,
            maximized: false,
            minimized: false,
        },
        menus: [],
        meta: {
            company: "Vsoft Tecnologia",
            year: 2021
        },
        stackPosition: 0,
        url: "/development",
    },
    // Super Aula
    {
        id: '3',
        foregroundColor: '#652D90',
        stackPosition: 0,
        name: 'Super Aula',
        icon: 'https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/icons%2Fsuperaula.svg?alt=media',
        favicon: 'https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/favicons%2Fsuperaula.svg?alt=media',
        options: {
            pinned: false,
            maximized: false,
            minimized: false,
        },
        url: '/superaula',
        meta: {
            company: '',
            year: 2020
        },
        menus: []
    },
    // Exame Prático
    {
        id: "5",
        foregroundColor: '#2D2D2D',
        name: "Exame Prático",
        favicon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/favicons%2Fexamepratico.svg?alt=media",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/icons%2Fexamepratico.svg?alt=media",
        options: {
            pinned: false,
            maximized: false,
            minimized: false,
        },
        menus: [],
        meta: {
            company: "Vsoft Tecnologia",
            year: 2020
        },
        stackPosition: 0,
        url: "/development",
    },
    // Remote
    {
        id: "6",
        foregroundColor: '#015B69',
        name: "Remote",
        favicon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/favicons%2Fremote.svg?alt=media",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/icons%2Fremote.svg?alt=media",
        options: {
            pinned: true,
            maximized: false,
            minimized: false,
        },
        menus: [],
        meta: {
            company: "Vsoft Tecnologia",
            year: 2020
        },
        stackPosition: 0,
        url: "/development",
    },
    // BiopassID Demo
    {
        id: "7",
        foregroundColor: '#C29359',
        name: "BiopassID Demo",
        favicon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/favicons%2Fbiopass.svg?alt=media",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/icons%2Fbiopass.svg?alt=media",
        options: {
            pinned: false,
            maximized: false,
            minimized: false,
        },
        menus: [],
        meta: {
            company: "Vsoft Tecnologia",
            year: 2020
        },
        stackPosition: 0,
        url: "/development",
    },
    // Eleições do Futuro
    {
        id: "8",
        foregroundColor: '#47AD66',
        name: "Eleições do Futuro",
        favicon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/favicons%2Feleicoes.svg?alt=media",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/icons%2Feleicoes.svg?alt=media",
        options: {
            pinned: false,
            maximized: false,
            minimized: false,
        },
        menus: [],
        meta: {
            company: "Vsoft Tecnologia",
            year: 2020
        },
        stackPosition: 0,
        url: "/development",
    },
    // Easy Proctor
    {
        id: "9",
        foregroundColor: '#39596B',
        name: "Easy Proctor",
        favicon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/favicons%2Feasyproctor.svg?alt=media",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/icons%2Feasyproctor.svg?alt=media",
        options: {
            pinned: false,
            maximized: false,
            minimized: false,
        },
        menus: [],
        meta: {
            company: "Vsoft Tecnologia",
            year: 2020
        },
        stackPosition: 0,
        url: "/development",
    },
    welcomeApp
];

export default apps;