declare const DefaultGraphOptions: {
    default: {
        padding: string;
        xAxis: {
            tickCount: number;
        };
    };
    pie: {
        appendPadding: number;
        radius: number;
        label: {
            type: string;
            offset: string;
            content: ({ percent }: any) => string;
            style: {
                fontSize: number;
                textAlign: string;
            };
        };
        interactions: {
            type: string;
        }[];
    };
    barStacked: {
        isStacked: boolean;
        label: {
            position: string;
            layout: {
                type: string;
            }[];
        };
    };
};
export default DefaultGraphOptions;
//# sourceMappingURL=GraphDefaults.d.ts.map