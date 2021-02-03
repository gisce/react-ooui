import {
  removeUndefinedFields,
  groupRangeValues,
  getParamsForFields,
} from "../helpers/searchFilterHelper";
import moment from "moment";

describe("A SearchFilterHelper instance", () => {
  describe("removeUndefinedFields method", () => {
    test("should return the same object without undefined fields", () => {
      const object = {
        testField: "field",
        testField2: undefined,
        testField3: undefined,
      };

      const filteredObject = removeUndefinedFields(object);

      expect(Object.keys(filteredObject).length).toBe(1);
      expect(filteredObject.testField).toBe("field");
    });
    test("should return an object without fields", () => {
      const object = {
        testField2: undefined,
        testField3: undefined,
      };

      const filteredObject = removeUndefinedFields(object);

      expect(Object.keys(filteredObject).length).toBe(0);
    });
    test("should return same object if it hasn't any undefined files", () => {
      const object = {
        testField1: "field",
        testField2: "field",
      };

      const filteredObject = removeUndefinedFields(object);

      expect(Object.keys(filteredObject).length).toBe(2);
      expect(filteredObject.testField1).toBe("field");
      expect(filteredObject.testField2).toBe("field");
    });
  });
  describe("groupRangeValues method", () => {
    test("should return the same object if it hasn't any fields to group", () => {
      const object = {
        charValue: "test",
        floatValue: 0.5,
      };

      const filteredObject = groupRangeValues(object);

      expect(JSON.stringify(filteredObject)).toBe(JSON.stringify(object));
    });
    test("should return a date value grouped", () => {
      const object = {
        charValue: "test",
        floatValue: 0.5,
        "dateField#from": "2021-01-01",
        "dateField#to": "2021-01-02",
      };

      const filteredObject = groupRangeValues(object);

      expect(Object.keys(filteredObject).length).toBe(3);
      expect(Object.keys(filteredObject)).toContain("dateField");
      expect(filteredObject.charValue).toBe(object.charValue);
      expect(filteredObject.floatValue).toBe(object.floatValue);
      expect(Array.isArray(filteredObject.dateField)).toBeTruthy();
      const from = filteredObject.dateField[0];
      const to = filteredObject.dateField[1];
      expect(from).toBe(object["dateField#from"]);
      expect(to).toBe(object["dateField#to"]);
    });
    test("should return a datetime value grouped", () => {
      const object = {
        charValue: "test",
        floatValue: 0.5,
        "datetime#date": ["2021-01-01", "2021-01-02"],
        "datetime#time": ["03:31", "03:32"],
      };

      const filteredObject = groupRangeValues(object);

      expect(Object.keys(filteredObject).length).toBe(3);
      expect(Object.keys(filteredObject)).toContain("datetime");
      expect(filteredObject.charValue).toBe(object.charValue);
      expect(filteredObject.floatValue).toBe(object.floatValue);
      expect(Array.isArray(filteredObject.datetime)).toBeTruthy();
      const date = filteredObject.datetime[0];
      const time = filteredObject.datetime[1];
      expect(Array.isArray(date)).toBeTruthy();
      expect(Array.isArray(time)).toBeTruthy();
      const dateFrom = date[0];
      const dateTo = date[1];
      const timeFrom = time[0];
      const timeTo = time[1];
      expect(dateFrom).toBe("2021-01-01");
      expect(dateTo).toBe("2021-01-02");
      expect(timeFrom).toBe("03:31");
      expect(timeTo).toBe("03:32");
    });
  });
  describe("getParamsForField method", () => {
    test("should return properly a float parameter", () => {
      const fields = {
        floatType: {
          type: "float",
        },
      };
      const values = {
        floatType: [1.1, 1.5],
      };
      const params = getParamsForFields(values, fields);
      expect(Array.isArray(params)).toBeTruthy();
      expect(params.length).toBe(1);
      expect(Array.isArray(params[0])).toBeTruthy();
      expect(params[0].length).toBe(2);
      const from = params[0][0];
      const to = params[0][1];
      expect(Array.isArray(from)).toBeTruthy();
      expect(Array.isArray(to)).toBeTruthy();
      expect(from[0]).toBe("floatType");
      expect(to[0]).toBe("floatType");
      expect(from[1]).toBe(">=");
      expect(to[1]).toBe("<=");
      expect(from[2]).toBe(1.1);
      expect(to[2]).toBe(1.5);
    });
    test("should return properly a float_time parameter", () => {
      const fields = {
        floatType: {
          type: "float_time",
        },
      };
      const values = {
        floatType: [1.1, 1.5],
      };
      const params = getParamsForFields(values, fields);
      expect(Array.isArray(params)).toBeTruthy();
      expect(params.length).toBe(1);
      expect(Array.isArray(params[0])).toBeTruthy();
      expect(params[0].length).toBe(2);
      const from = params[0][0];
      const to = params[0][1];
      expect(Array.isArray(from)).toBeTruthy();
      expect(Array.isArray(to)).toBeTruthy();
      expect(from[0]).toBe("floatType");
      expect(to[0]).toBe("floatType");
      expect(from[1]).toBe(">=");
      expect(to[1]).toBe("<=");
      expect(from[2]).toBe(1.1);
      expect(to[2]).toBe(1.5);
    });
    test("should return properly a progressbar parameter", () => {
      const fields = {
        floatType: {
          type: "progressbar",
        },
      };
      const values = {
        floatType: [1.1, 1.5],
      };
      const params = getParamsForFields(values, fields);
      expect(Array.isArray(params)).toBeTruthy();
      expect(params.length).toBe(1);
      expect(Array.isArray(params[0])).toBeTruthy();
      expect(params[0].length).toBe(2);
      const from = params[0][0];
      const to = params[0][1];
      expect(Array.isArray(from)).toBeTruthy();
      expect(Array.isArray(to)).toBeTruthy();
      expect(from[0]).toBe("floatType");
      expect(to[0]).toBe("floatType");
      expect(from[1]).toBe(">=");
      expect(to[1]).toBe("<=");
      expect(from[2]).toBe(1.1);
      expect(to[2]).toBe(1.5);
    });
    test("should return properly an integer parameter", () => {
      const fields = {
        field: {
          type: "integer",
        },
      };
      const values = {
        field: [1, 5],
      };
      const params = getParamsForFields(values, fields);
      expect(Array.isArray(params)).toBeTruthy();
      expect(params.length).toBe(1);
      expect(Array.isArray(params[0])).toBeTruthy();
      expect(params[0].length).toBe(2);
      const from = params[0][0];
      const to = params[0][1];
      expect(Array.isArray(from)).toBeTruthy();
      expect(Array.isArray(to)).toBeTruthy();
      expect(from[0]).toBe("field");
      expect(to[0]).toBe("field");
      expect(from[1]).toBe(">=");
      expect(to[1]).toBe("<=");
      expect(from[2]).toBe(1);
      expect(to[2]).toBe(5);
    });
    test("should return properly an char parameter", () => {
      const fields = {
        field: {
          type: "char",
        },
      };
      const values = {
        field: "lorem ipsum",
      };
      const params = getParamsForFields(values, fields);
      expect(Array.isArray(params)).toBeTruthy();
      expect(params.length).toBe(1);
      expect(Array.isArray(params[0])).toBeTruthy();
      expect(params[0].length).toBe(3);
      const fieldParams = params[0];
      expect(fieldParams[0]).toBe("field");
      expect(fieldParams[1]).toBe("ilike");
      expect(fieldParams[2]).toBe("lorem ipsum");
    });
    test("should return properly a text parameter", () => {
      const fields = {
        field: {
          type: "text",
        },
      };
      const values = {
        field: "lorem ipsum",
      };
      const params = getParamsForFields(values, fields);
      expect(Array.isArray(params)).toBeTruthy();
      expect(params.length).toBe(1);
      expect(Array.isArray(params[0])).toBeTruthy();
      expect(params[0].length).toBe(3);
      const fieldParams = params[0];
      expect(fieldParams[0]).toBe("field");
      expect(fieldParams[1]).toBe("ilike");
      expect(fieldParams[2]).toBe("lorem ipsum");
    });
    test("should return properly a many2one parameter", () => {
      const fields = {
        field: {
          type: "many2one",
        },
      };
      const values = {
        field: "lorem ipsum",
      };
      const params = getParamsForFields(values, fields);
      expect(Array.isArray(params)).toBeTruthy();
      expect(params.length).toBe(1);
      expect(Array.isArray(params[0])).toBeTruthy();
      expect(params[0].length).toBe(3);
      const fieldParams = params[0];
      expect(fieldParams[0]).toBe("field");
      expect(fieldParams[1]).toBe("ilike");
      expect(fieldParams[2]).toBe("lorem ipsum");
    });
    test("should return properly a one2many parameter", () => {
      const fields = {
        field: {
          type: "one2many",
        },
      };
      const values = {
        field: "lorem ipsum",
      };
      const params = getParamsForFields(values, fields);
      expect(Array.isArray(params)).toBeTruthy();
      expect(params.length).toBe(1);
      expect(Array.isArray(params[0])).toBeTruthy();
      expect(params[0].length).toBe(3);
      const fieldParams = params[0];
      expect(fieldParams[0]).toBe("field");
      expect(fieldParams[1]).toBe("ilike");
      expect(fieldParams[2]).toBe("lorem ipsum");
    });
    test("should return properly a many2many parameter", () => {
      const fields = {
        field: {
          type: "many2many",
        },
      };
      const values = {
        field: "lorem ipsum",
      };
      const params = getParamsForFields(values, fields);
      expect(Array.isArray(params)).toBeTruthy();
      expect(params.length).toBe(1);
      expect(Array.isArray(params[0])).toBeTruthy();
      expect(params[0].length).toBe(3);
      const fieldParams = params[0];
      expect(fieldParams[0]).toBe("field");
      expect(fieldParams[1]).toBe("ilike");
      expect(fieldParams[2]).toBe("lorem ipsum");
    });
    test("should return properly a selection parameter", () => {
      const fields = {
        field: {
          type: "selection",
        },
      };
      const values = {
        field: "value",
      };
      const params = getParamsForFields(values, fields);
      expect(Array.isArray(params)).toBeTruthy();
      expect(params.length).toBe(1);
      expect(Array.isArray(params[0])).toBeTruthy();
      expect(params[0].length).toBe(3);
      const fieldParams = params[0];
      expect(fieldParams[0]).toBe("field");
      expect(fieldParams[1]).toBe("=");
      expect(fieldParams[2]).toBe("value");
    });
    test("should return properly a boolean parameter", () => {
      const fields = {
        field: {
          type: "boolean",
        },
      };
      const values = {
        field: "true",
      };
      const params = getParamsForFields(values, fields);
      expect(Array.isArray(params)).toBeTruthy();
      expect(params.length).toBe(1);
      expect(Array.isArray(params[0])).toBeTruthy();
      expect(params[0].length).toBe(3);
      const fieldParams = params[0];
      expect(fieldParams[0]).toBe("field");
      expect(fieldParams[1]).toBe("=");
      expect(fieldParams[2]).toBe(true);
    });
    test("should return properly a date parameter", () => {
      const fields = {
        field: {
          type: "date",
        },
      };
      const values = {
        field: [moment("2021-01-01"), moment("2021-01-02")],
      };
      const params = getParamsForFields(values, fields);
      expect(Array.isArray(params)).toBeTruthy();
      expect(params.length).toBe(1);
      expect(Array.isArray(params[0])).toBeTruthy();
      expect(params[0].length).toBe(2);
      const from = params[0][0];
      const to = params[0][1];
      expect(Array.isArray(from)).toBeTruthy();
      expect(Array.isArray(to)).toBeTruthy();
      expect(from[0]).toBe("field");
      expect(to[0]).toBe("field");
      expect(from[1]).toBe(">=");
      expect(to[1]).toBe("<=");
      expect(from[2]).toBe("2021-01-01");
      expect(to[2]).toBe("2021-01-02");
    });
    test("should return properly a datetime parameter", () => {
      const fields = {
        field: {
          type: "datetime",
        },
      };
      const values = {
        field: [
          [moment("2021-01-01"), moment("2021-01-02")],
          [moment("1970-01-01 03:31"), moment("1970-01-01 03:32")],
        ],
      };
      const params = getParamsForFields(values, fields);
      expect(Array.isArray(params)).toBeTruthy();
      expect(params.length).toBe(1);
      expect(Array.isArray(params[0])).toBeTruthy();
      expect(params[0].length).toBe(2);
      const from = params[0][0];
      const to = params[0][1];
      expect(Array.isArray(from)).toBeTruthy();
      expect(Array.isArray(to)).toBeTruthy();
      expect(from[0]).toBe("field");
      expect(to[0]).toBe("field");
      expect(from[1]).toBe(">=");
      expect(to[1]).toBe("<=");
      expect(from[2]).toBe("2021-01-01 03:31");
      expect(to[2]).toBe("2021-01-02 03:32");
    });
  });
});
