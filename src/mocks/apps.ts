import { ref } from "vue";
import AppDTO from "../dtos/AppDTO";

const apps: AppDTO[] = [
    {
        id: '1',
        stackPosition: 0,
        name: 'Pilotar',
        icon: 'https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/logo-pilotar.jpg?alt=media',
        favicon: 'https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/favicons%2Ffavicon-pilotar.svg?alt=media',
        maximized: false,
        minimized: false,
        url: '/pilotar',
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
        ref: ref(null)
    },
    {
        id: '2',
        stackPosition: 0,
        name: 'Remote',
        icon: 'https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/logo-remote.jpg?alt=media',
        favicon: 'https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/favicons%2Ffavicon-remote.svg?alt=media',
        maximized: false,
        minimized: false,
        url: '/remote',
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
        ref: ref(null)
    },
];

export default apps;