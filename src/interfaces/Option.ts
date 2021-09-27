import { Ref } from "vue";
import WindowRef from "./WindowRef";

export default interface Option {
    title: string;
    action: (w: Ref<WindowRef> | undefined) => void;
}