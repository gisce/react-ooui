import { describe, it, expect } from "vitest";
import { mergeParams } from "../helpers/searchHelper";

describe("mergeParams", () => {
  it("should return domainParams when searchParams is empty array", () => {
    const domainParams = [
      ["field1", "=", "value1"],
      ["field2", "!=", "value2"],
    ];
    const result = mergeParams([], domainParams);
    expect(result).toEqual(domainParams);
  });

  it("should return searchParams when domainParams is empty array", () => {
    const searchParams = [
      ["field1", "ilike", "search"],
      ["field2", ">=", 100],
    ];
    const result = mergeParams(searchParams, []);
    expect(result).toEqual(searchParams);
  });

  it("should merge searchParams and domainParams with implicit AND operator when no OR operators are present", () => {
    const searchParams = [
      ["field1", "ilike", "search"],
      ["field2", ">=", 100],
    ];
    const domainParams = [
      ["field3", "=", "value"],
      ["field4", "!=", "other"],
    ];
    const result = mergeParams(searchParams, domainParams);

    // No explicit '&' needed when there are no '|' operators (MongoDB compatibility)
    const expected = [
      ["field1", "ilike", "search"],
      ["field2", ">=", 100],
      ["field3", "=", "value"],
      ["field4", "!=", "other"],
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
      ["name", "ilike", "test"],
      "|",
      ["active", "=", true],
      ["state", "in", ["draft", "open"]],
    ];

    expect(result).toEqual(expected);
  });

  it("should handle single search parameter", () => {
    const searchParams = [["name", "=", "John"]];
    const domainParams = [["active", "=", true]];
    const result = mergeParams(searchParams, domainParams);

    // No explicit '&' needed when there are no '|' operators (MongoDB compatibility)
    const expected = [
      ["name", "=", "John"],
      ["active", "=", true],
    ];

    expect(result).toEqual(expected);
  });

  it("should handle single domain parameter", () => {
    const searchParams = [
      ["name", "ilike", "search"],
      ["age", ">", 18],
    ];
    const domainParams = [["active", "=", true]];
    const result = mergeParams(searchParams, domainParams);

    // No explicit '&' needed when there are no '|' operators (MongoDB compatibility)
    const expected = [
      ["name", "ilike", "search"],
      ["age", ">", 18],
      ["active", "=", true],
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
      ["category", "=", "product"],
      "&",
      ["active", "=", true],
      "|",
      ["type", "=", "service"],
      ["type", "=", "consumable"],
    ];

    expect(result).toEqual(expected);
  });

  it("should preserve order with searchParams first, then domainParams", () => {
    const searchParams = [
      ["field_a", "=", "a"],
      ["field_b", "=", "b"],
    ];
    const domainParams = [
      ["field_1", "=", "1"],
      ["field_2", "=", "2"],
    ];
    const result = mergeParams(searchParams, domainParams);

    // No explicit '&' needed when there are no '|' operators (MongoDB compatibility)
    const expected = [
      ["field_a", "=", "a"],
      ["field_b", "=", "b"],
      ["field_1", "=", "1"],
      ["field_2", "=", "2"],
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
      ["number", "ilike", "323"],
      "&",
      ["state", "in", ["open"]],
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
      ["name", "ilike", "test"],
      ["amount", ">=", 100],
      "&",
      ["state", "in", ["open"]],
      "|",
      ["type", "=", "sale"],
      ["type", "=", "purchase"],
    ];

    expect(result).toEqual(expected);
  });

  it("should not add '&' operator for MongoDB compatibility when no '|' operators are present", () => {
    const searchParams = [["name", "in", ["12345"]]];
    const domainParams = [["type", "=", "p"]];
    const result = mergeParams(searchParams, domainParams);

    // For MongoDB, this should be the implicit AND without explicit '&'
    const expected = [
      ["name", "in", ["12345"]],
      ["type", "=", "p"],
    ];

    expect(result).toEqual(expected);
  });

  it("should add '&' operator when '|' operators are present in domain", () => {
    const searchParams = [["name", "in", ["12345"]]];
    const domainParams = [
      "|",
      ["type", "=", "sale"],
      ["type", "=", "purchase"],
    ];
    const result = mergeParams(searchParams, domainParams);

    // When there are '|' operators, we need explicit '&'
    const expected = [
      "&",
      ["name", "in", ["12345"]],
      "|",
      ["type", "=", "sale"],
      ["type", "=", "purchase"],
    ];

    expect(result).toEqual(expected);
  });

  it("should add '&' operator when '|' operators are present anywhere in complex domain", () => {
    const searchParams = [["name", "ilike", "test"]];
    const domainParams = [
      "&",
      ["active", "=", true],
      ["state", "in", ["open"]],
      "|",
      ["type", "=", "service"],
      ["type", "=", "consumable"],
    ];
    const result = mergeParams(searchParams, domainParams);

    // When there are '|' operators anywhere in the domain, we need explicit '&'
    const expected = [
      "&",
      ["name", "ilike", "test"],
      "&",
      ["active", "=", true],
      ["state", "in", ["open"]],
      "|",
      ["type", "=", "service"],
      ["type", "=", "consumable"],
    ];

    expect(result).toEqual(expected);
  });
});
