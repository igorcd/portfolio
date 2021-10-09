import { reactive } from "vue";
// Data
import apps from '../data/apps';
import profile from '../data/apps/profile.json';
import shortcuts from '../data/shortcuts';

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
        openedApps: [profile],
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

    public closeApp(index: number) {
        this.state.openedApps.splice(index, 1);
    }

    public closeCurrentApp() {
        this.state.openedApps = this.state.openedApps.filter(el => el.id != this.focusedApp.id);
    }
}

export default new AppsViewModel();