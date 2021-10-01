import WindowRef from "./WindowRef";

export default interface Option {
    title: string;
    action: (ref: WindowRef | undefined) => void;
}