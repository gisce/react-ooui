import React from "react";

import Tab from "../../views/tabs/Tab";

// import "antd/dist/antd.css";


import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Views/TabsAndContent",
};

export const Default = (): React.ReactElement => {
  return (
    <LocaleProvider lang="es_ES">
      <div>
        <Tab
          tabKey="1"
          label="Test TestTestTest"
          onClose={() => {}}
          isActive={true}
          onSelected={() => {}}
        />
        <Tab
          tabKey="1"
          label="Test TestTestTest"
          onClose={() => {}}
          onSelected={() => {}}
          isActive={false}
        />
        <Tab
          tabKey="1"
          label="Test TestTestTest"
          onClose={() => {}}
          onSelected={() => {}}
          isActive={false}
        />
        <Tab
          tabKey="1"
          label="Test TestTestTest"
          onClose={() => {}}
          onSelected={() => {}}
          isActive={false}
        />
        <Tab
          tabKey="1"
          label="Test TestTestTest"
          onClose={() => {}}
          onSelected={() => {}}
          isActive={false}
        />
        <Tab
          tabKey="1"
          label="Test TestTestTest"
          onClose={() => {}}
          onSelected={() => {}}
          isActive={false}
        />
        <Tab
          tabKey="1"
          label="Test TestTestTest"
          onClose={() => {}}
          onSelected={() => {}}
          isActive={false}
        />
        <Tab
          tabKey="1"
          label="Test TestTestTest"
          onClose={() => {}}
          onSelected={() => {}}
          isActive={false}
        />
        <Tab
          tabKey="1"
          label="Test TestTestTest"
          onClose={() => {}}
          onSelected={() => {}}
          isActive={false}
        />
        <Tab
          tabKey="1"
          label="Test TestTestTest"
          onClose={() => {}}
          onSelected={() => {}}
          isActive={false}
        />
      </div>
    </LocaleProvider>
  );
};
