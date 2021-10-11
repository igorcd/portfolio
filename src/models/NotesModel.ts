import AppModel from "./AppModel";

export default interface NotesModel extends AppModel {
    documents: { title: string; content: string }[];
    api: {
        loadDocument: (doc: { title: string; content: string}) => void;
    }
}