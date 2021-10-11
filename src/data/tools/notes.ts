import AppModel from "../../models/AppModel";

export interface NotesModel extends AppModel {
    documents: { title: string; content: string }[];
}

const notes: NotesModel = {
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
    menus: [],
    documents: []
};

export default notes;