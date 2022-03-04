"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchModal = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var FormModal_1 = require("./FormModal");
var SearchTree_1 = __importDefault(require("@/widgets/views/SearchTree"));
var icons_1 = require("@ant-design/icons");
var useWindowDimensions_1 = __importDefault(require("@/hooks/useWindowDimensions"));
var LocaleContext_1 = require("@/context/LocaleContext");
var SearchModal = function (props) {
    var visible = props.visible, onCloseModalProps = props.onCloseModal, onSelectValues = props.onSelectValues, model = props.model, nameSearch = props.nameSearch, domain = props.domain, _a = props.context, context = _a === void 0 ? {} : _a;
    var _b = react_1.useState(false), showCreateModal = _b[0], setShowCreateModal = _b[1];
    var _c = useWindowDimensions_1.default(), modalWidth = _c.modalWidth, modalHeight = _c.modalHeight;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    var _d = react_1.useState([]), selectedRowKeys = _d[0], setSelectedRowKeys = _d[1];
    var onCloseModal = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 5); })];
                case 1:
                    _a.sent();
                    onCloseModalProps();
                    return [2 /*return*/];
            }
        });
    }); };
    var onRowClicked = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var id;
        return __generator(this, function (_a) {
            id = event.id;
            onSelectValues([id]);
            return [2 /*return*/];
        });
    }); };
    function submit() {
        if (selectedRowKeys.length === 0) {
            onCloseModal();
            return;
        }
        onSelectValues(selectedRowKeys);
    }
    var content = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(SearchTree_1.default, { model: model, nameSearch: nameSearch, onRowClicked: onRowClicked, treeScrollY: modalHeight * 0.3, domain: domain, parentContext: context, onChangeSelectedRowKeys: function (selectedRowKeys) {
                    setSelectedRowKeys(selectedRowKeys);
                } }),
            react_1.default.createElement(antd_1.Divider, null),
            react_1.default.createElement(antd_1.Row, { justify: "end" },
                react_1.default.createElement(antd_1.Space, null,
                    react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.FileAddOutlined, null), onClick: function () {
                            setShowCreateModal(true);
                        } }, t("new")),
                    react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.CheckOutlined, null), onClick: function () {
                            submit();
                        }, type: "primary" }, t("ok")),
                    react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.CloseOutlined, null), onClick: onCloseModal }, t("cancel"))))));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(antd_1.Modal, { title: t("search"), centered: true, width: modalWidth, visible: visible && !showCreateModal, closable: true, onCancel: onCloseModal, footer: null, destroyOnClose: true }, content()),
        react_1.default.createElement(FormModal_1.FormModal, { model: model, visible: showCreateModal, parentContext: context, onSubmitSucceed: function (id) {
                setShowCreateModal(false);
                onCloseModal();
                onSelectValues([id]);
            }, onCancel: function () {
                setShowCreateModal(false);
                onCloseModal();
            } })));
};
exports.SearchModal = SearchModal;
//# sourceMappingURL=SearchModal.js.map