import React from "react";
import { Notebook as NotebookOoui } from "ooui";
declare type Tab = {
    title: string;
    children: React.ReactNode;
};
declare type Props = {
    tabs?: Tab[];
    ooui?: NotebookOoui;
};
declare function Notebook(props: Props): React.ReactElement;
export default Notebook;
//# sourceMappingURL=Notebook.d.ts.map