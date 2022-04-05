"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultGraphOptions = {
    default: {
        padding: "auto",
        xAxis: {
            tickCount: 5,
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
        interactions: [
            {
                type: "element-active",
            },
        ],
    },
    barStacked: {
        isStacked: true,
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