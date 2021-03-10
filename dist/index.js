"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormModal = exports.ConnectionProvider = exports.SearchTree = exports.Separator = exports.Text = exports.Label = exports.Integer = exports.Float = exports.Notebook = exports.Form = exports.SearchFilter = exports.Group = exports.Tree = exports.Many2one = exports.Boolean = exports.Selection = exports.Char = exports.Button = void 0;
var Button_1 = require("@/widgets/base/Button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return Button_1.Button; } });
var Char_1 = require("@/widgets/base/Char");
Object.defineProperty(exports, "Char", { enumerable: true, get: function () { return Char_1.Char; } });
var Selection_1 = require("@/widgets/base/Selection");
Object.defineProperty(exports, "Selection", { enumerable: true, get: function () { return Selection_1.Selection; } });
var Boolean_1 = require("@/widgets/base/Boolean");
Object.defineProperty(exports, "Boolean", { enumerable: true, get: function () { return Boolean_1.Boolean; } });
var Many2one_1 = require("@/widgets/base/Many2one");
Object.defineProperty(exports, "Many2one", { enumerable: true, get: function () { return Many2one_1.Many2one; } });
var Tree_1 = __importDefault(require("@/widgets/views/Tree"));
exports.Tree = Tree_1.default;
var Float_1 = require("@/widgets/base/Float");
Object.defineProperty(exports, "Float", { enumerable: true, get: function () { return Float_1.Float; } });
var Integer_1 = require("@/widgets/base/Integer");
Object.defineProperty(exports, "Integer", { enumerable: true, get: function () { return Integer_1.Integer; } });
var Group_1 = __importDefault(require("@/widgets/containers/Group"));
exports.Group = Group_1.default;
var Notebook_1 = __importDefault(require("@/widgets/containers/Notebook"));
exports.Notebook = Notebook_1.default;
var Form_1 = __importDefault(require("@/widgets/views/Form"));
exports.Form = Form_1.default;
var Label_1 = __importDefault(require("@/widgets/base/Label"));
exports.Label = Label_1.default;
var Text_1 = __importDefault(require("@/widgets/base/Text"));
exports.Text = Text_1.default;
var Separator_1 = require("@/widgets/base/Separator");
Object.defineProperty(exports, "Separator", { enumerable: true, get: function () { return Separator_1.Separator; } });
var SearchFilter_1 = __importDefault(require("@/widgets/views/searchFilter/SearchFilter"));
exports.SearchFilter = SearchFilter_1.default;
var SearchTree_1 = __importDefault(require("@/widgets/views/SearchTree"));
exports.SearchTree = SearchTree_1.default;
var FormModal_1 = require("@/widgets/modals/FormModal");
Object.defineProperty(exports, "FormModal", { enumerable: true, get: function () { return FormModal_1.FormModal; } });
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
exports.ConnectionProvider = ConnectionProvider_1.default;
//# sourceMappingURL=index.js.map