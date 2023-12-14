import { ReactElement, useContext } from "react";

import { Row, Col, Button } from "antd";
import {
  DownOutlined,
  UpOutlined,
  SearchOutlined,
  ClearOutlined,
} from "@ant-design/icons";

import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

type Props = {
  advancedFilter: boolean;
  isSearching: boolean;
  onAdvancedFilterToggle: () => void;
  onClear: () => void;
};

export function SearchBottomBar(props: Props): ReactElement {
  const { onAdvancedFilterToggle, advancedFilter, onClear, isSearching } =
    props;

  const { t } = useContext(LocaleContext) as LocaleContextType;

  return (
    <Row>
      <Col span={12} className="text-left pt-4 pb-2 pl-2">
        <a className="text-xs" onClick={onAdvancedFilterToggle}>
          {advancedFilter ? (
            <UpOutlined className="pr-1" />
          ) : (
            <DownOutlined className="pr-1" />
          )}
          {advancedFilter ? t("simple_search") : t("advanced_search")}
        </a>
      </Col>
      <Col span={12} className="text-right pb-2">
        <Button className="mr-5" icon={<ClearOutlined />} onClick={onClear}>
          {t("clear")}
        </Button>
        <Button
          icon={<SearchOutlined />}
          loading={isSearching}
          className="mr-2"
          type="primary"
          htmlType="submit"
        >
          {t("search")}
        </Button>
      </Col>
    </Row>
  );
}
