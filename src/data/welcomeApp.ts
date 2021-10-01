import AppDTO from "../dtos/AppDTO";

const welcomeApp: AppDTO = {
    id: '-2',
    stackPosition: 0,
    foregroundColor: "#181818",
    meta: {
        company: 'Lighteam',
        year: 2021
    },
    url: '/welcome',
    name: 'Igor Dantas',
    icon: 'https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/favicons%2Flighteam.svg?alt=media',
    favicon: 'https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/favicons%2Flighteam.svg?alt=media',
    options: {
        maximized: false,
        minimized: false,
        pinned: false
    },
    menus: [
        {
            title: "Sobre o desenvolvedor",
            icon: "dev",
            options: [
                {
                    title: "GitHub",
                    action: () => window.open('https://github.com/Igor4505', '_blank')
                },
                {
                    title: "LinkedIn",
                    action: () => window.open('https://github.com/Igor4505', '_blank')
                },
                {
                    title: "Perfil",
                    action: () => {}
                }
            ]
        },
        {
            title: "Sobre o sistema",
            icon: 'pc',
            options: [
                {
                    title: "Arquivo package.json",
                    action: () => {}
                },
                {
                    title: "Informações técnicas",
                    action: () => {}
                }
            ]
        },
        {
            title: "Feedback",
            icon: 'feedback',
            options: [
                {
                    title: 'Enviar sugestão',
                    action: () => {}
                },
                {
                    title: 'Relatar um problema',
                    action: () => {}
                }
            ]
        },
        {
            title: 'Contato',
            icon: 'phone',
            options: [
                {
                    title: 'Informações de contato',
                    action: () => window.alert('Clicou')
                }
            ]
        }
    ]
};

export default welcomeApp;