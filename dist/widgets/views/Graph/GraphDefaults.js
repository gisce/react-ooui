"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultGraphOptions = {
    default: {
        padding: "auto",
        xAxis: {
            tickCount: 5,
        },
        legend: {
            maxWidthRatio: 0.5,
            maxItemWidth: 1000,
        },
    },
    pie: {
        appendPadding: 10,
        radius: 0.9,
        label: {
            type: "inner",
            offset: "-30%",
            content: function (_a) {
                var percent = _a.percent;
                return (percent * 100).toFixed(0) + "%";
            },
            style: {
                fontSize: 14,
                textAlign: "center",
            },
        },
        legend: {
            maxWidthRatio: 0.5,
            maxItemWidth: 1000,
        },
        interactions: [
            {
                type: "element-active",
            },
        ],
    },
    barGrouped: {
        isGroup: true,
        legend: {
            maxWidthRatio: 0.5,
            maxItemWidth: 1000,
        },
        label: {
            position: "middle",
            layout: [
                {
                    type: "interval-adjust-position",
                },
                {
                    type: "interval-hide-overlap",
                },
                {
                    type: "adjust-color",
                },
            ],
        },
    },
};
exports.default = DefaultGraphOptions;
//# sourceMappingURL=GraphDefaults.js.map