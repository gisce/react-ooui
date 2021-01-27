import React, { useContext } from "react";

import { Row, Col, Button } from "antd";
import {
  DownOutlined,
  UpOutlined,
  SearchOutlined,
  ClearOutlined,
} from "@ant-design/icons";

import {
  LocalesContext,
  LocalesContextType,
} from "../../context/LocalesContext";

type Props = {
  advancedFilter: boolean;
  isSearching: boolean;
  onAdvancedFilterToggle: () => void;
  onClear: () => void;
};

export function SearchBottomBar(props: Props): React.ReactElement {
  const {
    onAdvancedFilterToggle,
    advancedFilter,
    onClear,
    isSearching,
  } = props;

  const { getString } = useContext(LocalesContext) as LocalesContextType;

  return (
    <Row>
      <Col span={12} className="text-left pt-4 pb-2">
        <a className="text-xs" onClick={onAdvancedFilterToggle}>
          {advancedFilter ? <UpOutlined /> : <DownOutlined />}
          {advancedFilter
            ? getString("simple_search")
            : getString("advanced_search")}
        </a>
      </Col>
      <Col span={12} className="text-right pb-2">
        <Button className="mr-5" icon={<ClearOutlined />} onClick={onClear}>
          Clear
        </Button>
        <Button
          icon={<SearchOutlined />}
          loading={isSearching}
          className="mr-2"
          type="primary"
          htmlType="submit"
        >
          {getString("search")}
        </Button>
      </Col>
    </Row>
  );
}
