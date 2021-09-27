import { reactive } from "vue";
import AppDTO from "../dtos/AppDTO";
import apps from '../mocks/apps';

import lighteamApp from '../mocks/lighteamApp';
import welcomeApp from '../mocks/welcomeApp';

interface AppsViewModelState {
    apps: AppDTO[];
    openedApps: AppDTO[];
    defaultApp: AppDTO;
}

class AppsViewModel {

    private state = reactive<AppsViewModelState>({
        apps: apps,
        openedApps: window.innerWidth < 640 ? [] : [welcomeApp],
        defaultApp: lighteamApp
    });

    /** Todos os aplicativos */
    public get apps() {
        return this.state.apps;
    }

    /** Aplicativos abertos */
    public get openedApps() {
        return this.state.openedApps;
    }

    /** Aplicativo em foco */
    public get focusedApp() {
        return this.state.openedApps.filter(el => !el.minimized).find(el => el.stackPosition == this.state.openedApps.length - 1) || this.state.defaultApp;
    }

    public get menus() {
        return this.state.openedApps
            .filter(el => !el.minimized && el.menus.length > 0)
            .find(el => el.stackPosition == this.state.openedApps.length - 1)?.menus
             || this.state.defaultApp.menus;
    }

    /** O aplicativo em foco está maximizado */
    public get hasMaximizedApp() {
        return this.focusedApp?.maximized;
    }

    // ==== MÉTODOS ====
    /** Restaurar tamanho do app */
    public restoreAppSize() {
        this.focusedApp.maximized = false;
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
                el.minimized = false;
            }
        });
    }

    public minimizeCurrentApp() {
        if(this.focusedApp.id != '-1') {
            this.focusedApp.minimized = true;
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