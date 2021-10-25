declare type TabProps = {
    tabKey: string;
    label: string;
    onClose: (key: string) => void;
    isActive: boolean;
    onSelected: (key: string) => void;
};
declare function Tab(props: TabProps): JSX.Element;
export default Tab;
//# sourceMappingURL=Tab.d.ts.map