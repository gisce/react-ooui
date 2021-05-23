import { getErpValues } from "../helpers/erpReadWriteHelper";

describe("A ErpWriteHelper instance", () => {
  test.only("should return the proper One2many format when saving", () => {
    const values = getErpValues({
      values: {},
      touchedValues: {
        one2many: [1, "test"],
      },
      fields: {
        one2many: {
          type: "one2many",
        },
      },
    });
    expect(Array.isArray(values.one2many)).toBeTruthy();
    expect(values.one2many.length).toBe(1);
    expect(values.one2many[0]).toBe([1]);
  });
});
