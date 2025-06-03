import { describe, it, expect } from "vitest";
import { mergeParams } from "../helpers/searchHelper";

describe("mergeParams", () => {
  it("should return domainParams when searchParams is null", () => {
    const domainParams = [
      ["field1", "=", "value1"],
      ["field2", "!=", "value2"],
    ];
    const result = mergeParams(null, domainParams);
    expect(result).toEqual(domainParams);
  });

  it("should return domainParams when searchParams is undefined", () => {
    const domainParams = [
      ["field1", "=", "value1"],
      ["field2", "!=", "value2"],
    ];
    const result = mergeParams(undefined, domainParams);
    expect(result).toEqual(domainParams);
  });

  it("should return domainParams when searchParams is empty array", () => {
    const domainParams = [
      ["field1", "=", "value1"],
      ["field2", "!=", "value2"],
    ];
    const result = mergeParams([], domainParams);
    expect(result).toEqual(domainParams);
  });

  it("should return searchParams when domainParams is null", () => {
    const searchParams = [
      ["field1", "ilike", "search"],
      ["field2", ">=", 100],
    ];
    const result = mergeParams(searchParams, null);
    expect(result).toEqual(searchParams);
  });

  it("should return searchParams when domainParams is undefined", () => {
    const searchParams = [
      ["field1", "ilike", "search"],
      ["field2", ">=", 100],
    ];
    const result = mergeParams(searchParams, undefined);
    expect(result).toEqual(searchParams);
  });

  it("should return searchParams when domainParams is empty array", () => {
    const searchParams = [
      ["field1", "ilike", "search"],
      ["field2", ">=", 100],
    ];
    const result = mergeParams(searchParams, []);
    expect(result).toEqual(searchParams);
  });

  it("should merge searchParams and domainParams with AND operator", () => {
    const searchParams = [
      ["field1", "ilike", "search"],
      ["field2", ">=", 100],
    ];
    const domainParams = [
      ["field3", "=", "value"],
      ["field4", "!=", "other"],
    ];
    const result = mergeParams(searchParams, domainParams);

    const expected = [
      "&",
      ["field3", "=", "value"],
      ["field4", "!=", "other"],
      ["field1", "ilike", "search"],
      ["field2", ">=", 100],
    ];

    expect(result).toEqual(expected);
  });

  it("should handle complex domain structures", () => {
    const searchParams = [["name", "ilike", "test"]];
    const domainParams = [
      "|",
      ["active", "=", true],
      ["state", "in", ["draft", "open"]],
    ];
    const result = mergeParams(searchParams, domainParams);

    const expected = [
      "&",
      "|",
      ["active", "=", true],
      ["state", "in", ["draft", "open"]],
      ["name", "ilike", "test"],
    ];

    expect(result).toEqual(expected);
  });

  it("should handle single search parameter", () => {
    const searchParams = [["name", "=", "John"]];
    const domainParams = [["active", "=", true]];
    const result = mergeParams(searchParams, domainParams);

    const expected = ["&", ["active", "=", true], ["name", "=", "John"]];

    expect(result).toEqual(expected);
  });

  it("should handle single domain parameter", () => {
    const searchParams = [
      ["name", "ilike", "search"],
      ["age", ">", 18],
    ];
    const domainParams = [["active", "=", true]];
    const result = mergeParams(searchParams, domainParams);

    const expected = [
      "&",
      ["active", "=", true],
      ["name", "ilike", "search"],
      ["age", ">", 18],
    ];

    expect(result).toEqual(expected);
  });

  it("should handle nested domain with OR conditions", () => {
    const searchParams = [["category", "=", "product"]];
    const domainParams = [
      "&",
      ["active", "=", true],
      "|",
      ["type", "=", "service"],
      ["type", "=", "consumable"],
    ];
    const result = mergeParams(searchParams, domainParams);

    const expected = [
      "&",
      "&",
      ["active", "=", true],
      ["category", "=", "product"],
      "|",
      ["type", "=", "service"],
      ["type", "=", "consumable"],
    ];

    expect(result).toEqual(expected);
  });

  it("should preserve order with domainParams first, then searchParams", () => {
    const searchParams = [
      ["field_a", "=", "a"],
      ["field_b", "=", "b"],
    ];
    const domainParams = [
      ["field_1", "=", "1"],
      ["field_2", "=", "2"],
    ];
    const result = mergeParams(searchParams, domainParams);

    const expected = [
      "&",
      ["field_1", "=", "1"],
      ["field_2", "=", "2"],
      ["field_a", "=", "a"],
      ["field_b", "=", "b"],
    ];

    expect(result).toEqual(expected);
  });

  it("should handle multiple search params with complex domain structure correctly", () => {
    const searchParams = [["number", "ilike", "323"]];
    const domainParams = [
      "&",
      ["state", "in", ["open"]],
      "|",
      ["state", "=", "draft"],
      ["type", "in", ["out_invoice", "out_refund"]],
    ];
    const result = mergeParams(searchParams, domainParams);

    const expected = [
      "&",
      "&",
      ["state", "in", ["open"]],
      ["number", "ilike", "323"],
      "|",
      ["state", "=", "draft"],
      ["type", "in", ["out_invoice", "out_refund"]],
    ];

    expect(result).toEqual(expected);
  });

  it("should handle multiple search parameters with complex domain structure", () => {
    const searchParams = [
      ["name", "ilike", "test"],
      ["amount", ">=", 100],
    ];
    const domainParams = [
      "&",
      ["state", "in", ["open"]],
      "|",
      ["type", "=", "sale"],
      ["type", "=", "purchase"],
    ];
    const result = mergeParams(searchParams, domainParams);

    const expected = [
      "&",
      "&",
      "&",
      ["state", "in", ["open"]],
      "|",
      ["type", "=", "sale"],
      ["type", "=", "purchase"],
      ["name", "ilike", "test"],
      ["amount", ">=", 100],
    ];

    expect(result).toEqual(expected);
  });
});
