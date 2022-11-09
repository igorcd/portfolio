import { reactive } from "vue";

// Data
import apps from '../data/apps';
import profile from '../data/apps/profile.json';
import shortcuts from '../data/shortcuts';
import documents from "../documents";
import collection from '../data/apps/collection.json';

// Tools
import { NotesModel } from '../data/tools/notes';

// Models e DTOs
import ShortcutModel from "../models/ShortcutModel";
import AppModel from "../models/AppModel";

interface AppsViewModelState {
    apps: AppModel[];
    openedApps: AppModel[];
    defaultApp: AppModel;
    shortcuts: ShortcutModel[];
}

class AppsViewModel {

    private state = reactive<AppsViewModelState>({
        apps: apps,
        openedApps: window.innerWidth < 640 ? [] :[profile],
        defaultApp: profile,
        shortcuts: shortcuts as ShortcutModel[]
    });

    /** Todos os aplicativos */
    public get apps() {
        return this.state.apps as AppModel[];
    }

    /** Aplicativos abertos */
    public get openedApps() {
        return this.state.openedApps;
    }

    /** Aplicativo em foco */
    public get focusedApp() {
        return this.state.openedApps
            .filter(el => !el.options.minimized)
            .find(el => el.stackPosition == this.state.openedApps.length - 1) || this.state.defaultApp;
    }

    /** Aplicativos na barra de taregas  */
    public get taskBarApps() {
        const pinned = this.state.apps.filter(el => el.options.pinned);
        pinned.splice(Math.floor(pinned.length / 2), 0, collection);
        return [...pinned, ...this.openedApps.filter(el => !pinned.includes(el))];
    }

    /** Atalhos */
    public get shortcuts() {
        return this.state.shortcuts;
    }

    /** Menus */
    public get menus() {
        return this.state.openedApps
            .filter(el => !el.options.minimized && el.menus.length > 0)
            .find(el => el.stackPosition == this.state.openedApps.length - 1)?.menus
             || this.state.defaultApp.menus;
    }

    /** O aplicativo em foco está maximizado */
    public get hasMaximizedApp() {
        return this.focusedApp?.options.maximized;
    }

    // ==== MÉTODOS ====

    /** Restaurar tamanho do app */
    public toogleAppSize() {
        this.focusedApp.options.maximized = !this.focusedApp.options.maximized;
    }
    public restoreAppSize() {
        this.focusedApp.options.maximized = false;
    }

    /** Focar aplicativo */
    public focusApp(stackPosition: number) {
        this.openedApps.forEach(el => {

            // Caso seja um App que esteja na frente
            if(el.stackPosition > stackPosition) {
                el.stackPosition -= 1;
            }

            // Caso seja o app
            else if(el.stackPosition == stackPosition) {
                el.stackPosition = this.openedApps.length - 1;
                el.options.minimized = false;
            }
        });
    }

    /** Minimizar aplicativo */
    public minimizeCurrentApp() {
        if(this.focusedApp.id != '-1') {
            this.focusedApp.options.minimized = true;
        }
    }

    /** Abrir aplicativo */
    public openApp(appId: string) {
        const hasApp = this.state.openedApps.find(el => el.id == appId);

        if(hasApp != null) {
            this.focusApp(hasApp.stackPosition);
            return;
        }

        const newApp = apps.find(el => el.id == appId)!;
        newApp.stackPosition = this.state.openedApps.length;
        this.state.openedApps.push(newApp);
    }

    /** Fechar aplicativo */
    public closeApp(index: number) {
        this.state.openedApps.splice(index, 1);
    }

    /** Fechar aplicativo atual */
    public closeCurrentApp() {
        this.state.openedApps = this.state.openedApps.filter(el => el.id != this.focusedApp.id);
    }

    /** Abrir documento */
    public openDocument(document: string) {
        
        const newApp: NotesModel = { 
            id: "Notes",
            foregroundColor: "#36495D",
            stackPosition: 0,
            name: "Notes",
            icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/tools%2Fnotes%2Ficon.svg?alt=media",
            favicon: "https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/tools%2Fnotes%2Ffavicon.svg?alt=media",
            url: "/notes",
            options: {
                pinned: true,
                maximized: false,
                minimized: false
            },
            menus: [
                {
                    "title": "Inicio",
                    "icon": "home",
                    "options": [
                        {
                            "title": "Fechar",
                            "action": "(vm) => vm.closeCurrentApp()"
                        }
                    ]
                },
            ],
            documents: []
        };
        newApp.documents.push(documents[document]);
        newApp.stackPosition = this.state.openedApps.length;
        this.state.openedApps.push(newApp);

        // const notesTool = this.state.openedApps.find(el => el.id == 'Notes') as NotesModel;

        // if(!notesTool) {
        //     const newApp = { ...notes };
        //     newApp.documents.push(documents[document]);
        //     newApp.stackPosition = this.state.openedApps.length;
        //     this.state.openedApps.push(newApp);
        // }
        // else {
        //     notesTool.documents.push(documents[document]);
        //     this.focusApp(notesTool.stackPosition);
        // }
    }

}

export default new AppsViewModel();