import React from "react";

import { FiberGrid } from "../widgets/custom/FiberGrid";
import { Char as CharOoui } from "@gisce/ooui";

// import "antd/dist/antd.css";


import LocaleProvider from "../context/LocaleContext";
import { Form } from "antd";

export default {
  title: "Components/Widgets/Custom/FiberGrid",
};

const exampleJson = {
  res: {
    elements: {
      wires: [
        {
          id: 21,
          name: "TRAM1 23/06",
          disposition: "LEFT",
          tubes: [
            {
              id: 23,
              name: "T1-Tub 1",
              color: "#cfc",
              fibers: [
                { id: 223, name: "F1-F1 - ROJA", color: "#448844" },
                { id: 224, name: "F2-F2 - VERDE", color: "#00f0ff" },
                { id: 225, name: "F3-F3 - AZUL", color: "#0000FF" },
                { id: 226, name: "F4-F4 - NEGRA", color: "#000000" },
              ],
            },
            {
              id: 24,
              name: "T2-Tub 2",
              color: "#bbf",
              fibers: [
                { id: 227, name: "F1-F1 - ROJA", color: "#FF0000" },
                { id: 228, name: "F2-F2 - VERDE", color: "#00FF00" },
                { id: 229, name: "F3-F3 - AZUL", color: "#0000FF" },
                { id: 230, name: "F4-F4 - NEGRA", color: "#000000" },
              ],
            },
          ],
        },
        {
          id: 22,
          name: "TRAM2 23/06",
          disposition: "RIGHT",
          tubes: [
            {
              id: 25,
              name: "T1-Tub 1",
              color: "#faf",
              fibers: [
                { id: 231, name: "F1-F1 - ROJA", color: "#FF0000" },
                { id: 232, name: "F2-F2 - VERDE", color: "#00FF00" },
                { id: 233, name: "F3-F3 - AZUL", color: "#0000FF" },
                { id: 234, name: "F4-F4 - NEGRA", color: "#000000" },
              ],
            },
            {
              id: 26,
              name: "T2-Tub 2",
              color: "#aafaff",
              fibers: [
                { id: 235, name: "F1-F1 - ROJA", color: "#F000FF" },
                { id: 236, name: "F2-F2 - VERDE", color: "#3F090F" },
                { id: 237, name: "F3-F3 - AZUL", color: "#128312" },
                { id: 238, name: "F4-F4 - NEGRA", color: "#F39F39" },
              ],
            },
          ],
        },
      ],
    },
    connections: {
      fibers: [
        { fiber_in: 231, fiber_out: 227 },
        { fiber_in: 228, fiber_out: 232 },
        { fiber_in: 233, fiber_out: 229 },
        { fiber_in: 230, fiber_out: 234 },
        { fiber_in: 223, fiber_out: 235 },
        { fiber_in: 236, fiber_out: 224 },
        { fiber_in: 225, fiber_out: 237 },
        { fiber_in: 238, fiber_out: 226 },
      ],
    },
  },
};

export const Default = (): React.ReactElement => {
  const ooui = new CharOoui({
    name: "field",
    string: "Lorem ipsum",
  });

  return (
    <Form
      initialValues={{
        field: JSON.stringify(exampleJson),
      }}
    >
      <LocaleProvider lang="en_US">
        <FiberGrid ooui={ooui} />
      </LocaleProvider>
    </Form>
  );
};
