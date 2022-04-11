declare const DefaultGraphOptions: {
    default: {
        padding: string;
        xAxis: {
            tickCount: number;
        };
        legend: {
            maxWidthRatio: number;
            maxItemWidth: number;
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
        legend: {
            maxWidthRatio: number;
            maxItemWidth: number;
        };
        interactions: {
            type: string;
        }[];
    };
    barGrouped: {
        isGroup: boolean;
        legend: {
            maxWidthRatio: number;
            maxItemWidth: number;
        };
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