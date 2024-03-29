import React from "react";

import Tab from "../../views/tabs/Tab";

import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Views/Tab",
};

export const Default = (): React.ReactElement => {
  return (
    <LocaleProvider lang="es_ES">
      <div
        style={{
          display: "inline-flex",
          gap: 5,
        }}
      >
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
