import { Button } from "@/widgets/base/Button";
import { ButtonGroup } from "./widgets/custom/ButtonGroup";
import { Char } from "@/widgets/base/Char";
import { Selection } from "@/widgets/base/Selection";
import { Boolean } from "@/widgets/base/Boolean";
import { Many2one } from "@/widgets/base/many2one/Many2one";
import { One2many } from "@/widgets/base/one2many/One2many";
import { Tree } from "@/widgets/views/Tree";
import { Float } from "@/widgets/base/Float";
import { ProgressBar } from "@/widgets/base/ProgressBar";
import { FloatTime } from "@/widgets/base/FloatTime";
import { Integer } from "@/widgets/base/Integer";
import Group from "@/widgets/containers/Group";
import Notebook from "@/widgets/containers/Notebook";
import Form from "@/widgets/views/Form";
import Label from "@/widgets/base/Label";
import Text from "@/widgets/base/Text";
import { Separator } from "@/widgets/base/Separator";
import SearchFilter from "@/widgets/views/searchFilter/SearchFilter";
import SearchTree from "@/widgets/views/SearchTree";
import { FormModal } from "@/widgets/modals/FormModal";
import { ExportModal } from "@/widgets/modals/ExportModal";
import { SearchModal } from "@/widgets/modals/SearchModal";
import Date from "@/widgets/base/Date";
import DateTime from "@/widgets/base/DateTime";
import Time from "@/widgets/base/Time";
import type {
  One2manyValue,
  One2manyItem,
} from "@/widgets/base/one2many/One2manyInput";
import { Reference } from "@/widgets/base/Reference";
import { Binary } from "@/widgets/base/Binary";
import iconMapper from "@/helpers/iconMapper";
import ActionBar from "@/actionbar/FormActionBar";
import { Url } from "@/widgets/base/Url";
import { Email } from "@/widgets/base/Email";
import { Image } from "@/widgets/base/Image";
import showConfirmDialog from "@/ui/ConfirmDialog";
import Dashboard from "@/widgets/views/Dashboard/Dashboard";
import { Tags } from "@/widgets/custom/Tags";
import { Tag } from "@/widgets/custom/Tag";
import { MultiCheckbox } from "./widgets/custom/MultiCheckbox";
import { Markdown } from "@/widgets/custom/Markdown";
import { Radio } from "@/widgets/custom/Radio";
import { Switch } from "@/widgets/custom/Switch";
import { Steps } from "@/widgets/custom/Steps";
import { ArrowStepsField } from "@/widgets/custom/ArrowSteps";
import { CodeEditor } from "@/widgets/custom/CodeEditor";
import { CommentsTimelineField } from "@/widgets/custom/Comments";
import { HTMLPreview } from "@/widgets/custom/HTMLPreview";
import { Alert } from "@/widgets/custom/Alert";
import { DashboardGrid } from "@/widgets/views/DashboardGrid";
import { GraphIndicator } from "@/widgets/views/Graph/GraphIndicator";

import type {
  TreeView,
  SearchFields,
  FormView,
  ConnectionProviderType,
  SearchRequest,
  SearchResponse,
  CreateObjectRequest,
  UpdateObjectRequest,
  ViewData,
  Views,
  ExecuteRequest,
  ReadObjectsRequest,
  DeleteObjectsRequest,
  CreateReportRequest,
  GetReportRequest,
  ExecuteOnChangeRequest,
  GetViewRequest,
  GetFieldsRequest,
  DefaultGetRequest,
  ReadEvalUiObjectsRequest,
  NameSearchRequest,
} from "@/types";
import ConnectionProvider from "@/ConnectionProvider";
import RootView from "./views/RootView";
import TabSelector from "./views/TabSelector";
import CurrentTabContent from "./views/CurrentTabContent";
import ContentRootProvider from "./context/ContentRootContext";
import FavouriteButton from "./ui/FavouriteButton";
import { ConfigContext, ConfigContextProvider } from "./context/ConfigContext";
import Tab from "./views/tabs/Tab";
import ActionView from "./views/ActionView";
import { ErpAllFeatureKeys, ErpFeatureKeys } from "./models/erpFeature";
import type { ErpFeaturesMap } from "./models/erpFeature";
import { GraphCard } from "./widgets/views/Graph";
import dayjs from "./helpers/dayjs";

export {
  Button,
  ButtonGroup,
  Char,
  Selection,
  Boolean,
  Many2one,
  Tree,
  Group,
  SearchFilter,
  Form,
  Notebook,
  Float,
  FloatTime,
  Integer,
  Label,
  Text,
  TreeView,
  FormView,
  SearchFields,
  Separator,
  SearchTree,
  SearchRequest,
  SearchResponse,
  CreateObjectRequest,
  UpdateObjectRequest,
  ConnectionProvider,
  ConnectionProviderType,
  ViewData,
  Views,
  ExecuteRequest,
  ReadObjectsRequest,
  ReadEvalUiObjectsRequest,
  DeleteObjectsRequest,
  FormModal,
  SearchModal,
  One2many,
  One2manyItem,
  One2manyValue,
  Date,
  DateTime,
  Time,
  Reference,
  Binary,
  iconMapper,
  CreateReportRequest,
  GetReportRequest,
  ExecuteOnChangeRequest,
  ActionBar,
  GetViewRequest,
  GetFieldsRequest,
  DefaultGetRequest,
  RootView,
  TabSelector,
  CurrentTabContent,
  Url,
  Email,
  Image,
  ContentRootProvider,
  showConfirmDialog,
  NameSearchRequest,
  ProgressBar,
  FavouriteButton,
  Dashboard,
  GraphIndicator,
  GraphCard,
  DashboardGrid,
  Tags,
  Tag,
  MultiCheckbox,
  Markdown,
  Radio,
  Switch,
  Steps,
  ArrowStepsField,
  CodeEditor,
  CommentsTimelineField,
  ExportModal,
  ConfigContext,
  Tab,
  ActionView,
  ErpAllFeatureKeys,
  ErpFeatureKeys,
  ErpFeaturesMap,
  ConfigContextProvider,
  HTMLPreview,
  Alert,
  dayjs,
};
