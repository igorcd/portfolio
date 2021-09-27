import AppDTO from "../dtos/AppDTO";

const lighteamApp: AppDTO = {
    id: '-1',
    stackPosition: 0,
    url: '/',
    name: 'Lighteam',
    icon: '',
    favicon: 'https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/favicons%2Ffavicon-lighteam.svg?alt=media',
    maximized: false,
    minimized: false,
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

export default lighteamApp;