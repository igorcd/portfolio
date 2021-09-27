import { Ref } from "vue";
import MenuItem from "../interfaces/MenuItem";
import WindowRef from "../interfaces/WindowRef";

export default interface AppDTO {
    id: string;
    stackPosition: number;
    url: string;
    name: string;
    icon: string;
    favicon: string;
    maximized: boolean;
    minimized: boolean;
    ref?: Ref<WindowRef | null>;
    menus: MenuItem[]
}