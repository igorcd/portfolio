import MenuItem from "../interfaces/MenuItem";
import WindowRef from "../interfaces/WindowRef";

export default interface AppDTO {
    id: string;
    foregroundColor: string;
    stackPosition: number;
    url: string;
    name: string;
    icon: string;
    favicon: string;
    ref?: WindowRef;
    menus: MenuItem[];
    options: {
        maximized: boolean;
        minimized: boolean;
        pinned: boolean;
    }
    meta: {
        year: number;
        company: string;
    }
}