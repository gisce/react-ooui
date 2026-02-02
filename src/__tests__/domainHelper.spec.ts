import { getSafeSearchDomain } from "@/helpers/domainHelper";
import { describe, test, expect } from "vitest";

describe("getSafeSearchDomain", () => {
  describe("safe domains (returned as-is)", () => {
    test("static domain with True", () => {
      const domain = "[('active', '=', True)]";
      expect(getSafeSearchDomain(domain)).toBe(domain);
    });

    test("static domain with False", () => {
      const domain = "[('active', '=', False)]";
      expect(getSafeSearchDomain(domain)).toBe(domain);
    });

    test("static domain with string values", () => {
      const domain = "[('state', 'in', ('open', 'draft'))]";
      expect(getSafeSearchDomain(domain)).toBe(domain);
    });

    test("static domain with numeric value", () => {
      const domain = "[('type_id', '=', 5)]";
      expect(getSafeSearchDomain(domain)).toBe(domain);
    });

    test("undefined domain", () => {
      expect(getSafeSearchDomain(undefined)).toBeUndefined();
    });

    test("false domain", () => {
      expect(getSafeSearchDomain(false)).toBe(false);
    });
  });

  describe("unsafe domains (returned as [])", () => {
    test("domain with parent field reference", () => {
      expect(
        getSafeSearchDomain("[('partner_id', '=', parent.partner_id)]"),
      ).toEqual([]);
    });

    test("domain with simple field reference (section_id)", () => {
      expect(getSafeSearchDomain("[('section_ids', '=', section_id)]")).toEqual(
        [],
      );
    });

    test("domain with simple field reference (company_id)", () => {
      expect(getSafeSearchDomain("[('company_id', '=', company_id)]")).toEqual(
        [],
      );
    });

    test("mixed domain with field reference", () => {
      expect(
        getSafeSearchDomain(
          "['|', ('active', '=', True), ('partner_id', '=', parent.partner_id)]",
        ),
      ).toEqual([]);
    });
  });
});
