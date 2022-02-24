import React, { useEffect } from "react";
import { DashboardProps } from "./Dashboard.types";

export function Dashboard(props: DashboardProps) {
  const { arch } = props;

  function test(_arch: string) {
    console.log(_arch);
  }

  useEffect(() => {
    console.log();
    test(arch);
  }, [arch]);

  return <>Hi</>;
}
