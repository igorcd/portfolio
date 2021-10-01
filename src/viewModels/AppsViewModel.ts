import { reactive } from "vue";
import AppDTO from "../dtos/AppDTO";

// Data
import apps from '../data/apps';
import welcomeApp from '../data/welcomeApp';
import ShortcutDTO from "../dtos/ShortcutDTO";
import shortcuts from '../data/shortcuts.json';

interface AppsViewModelState {
    apps: AppDTO[];
    openedApps: AppDTO[];
    defaultApp: AppDTO;
    shortcuts: ShortcutDTO[];
}

class AppsViewModel {

    private state = reactive<AppsViewModelState>({
        apps: apps,
        openedApps: window.innerWidth < 640 ? [] : [welcomeApp],
        defaultApp: welcomeApp,
        shortcuts: shortcuts as ShortcutDTO[]
    });

    /** Todos os aplicativos */
    public get apps() {
        return this.state.apps as AppDTO[];
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
        return [...pinned, ...this.openedApps.filter(el => !pinned.includes(el))];
    }

    /** Atalho */
    public get shortcuts() {
        return this.state.shortcuts;
    }

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

    public minimizeCurrentApp() {
        if(this.focusedApp.id != '-1') {
            this.focusedApp.options.minimized = true;
        }
    }

    /** Abrir aplicativo */
    public openApp(app: AppDTO) {
        const hasApp = this.state.openedApps.find(el => el.id == app.id);

        if(!hasApp) {
            app.stackPosition = this.state.openedApps.length;
            (this.state.openedApps as AppDTO[]).push(app);
        }
        else {
            this.focusApp(app.stackPosition);
        }
    }

    public closeApp(index: number) {
        this.state.openedApps.splice(index, 1);
    }

    public closeCurrentApp() {
        this.state.openedApps = this.state.openedApps.filter(el => el.id != this.focusedApp.id);
    }
}

export default new AppsViewModel();